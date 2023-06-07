import { Repository } from 'typeorm';
import { GrowdeverEntity } from '../db/typeorm/growdever.entity';
import { pgHelper } from '../db/typeorm/pg-helper';
import { Address } from '../models/address';
import { Assessment } from '../models/assessment';
import { Growdever } from '../models/growdever';
import { CacheRedisRepository } from './cache-redis';

const SKILLS_SEPARATOR = '|';
const GROWDEVERS_LIST_CACHE_KEY = 'get-growdevers';

function stringSkillsToArray(skills: string): string[] {
  return skills.length > 0 ? skills.split(SKILLS_SEPARATOR) : [];
}

export class GrowdeverTypeormRepository {
  private growdeverRepository: Repository<GrowdeverEntity>;
  private cacheRepository: CacheRedisRepository;

  constructor() {
    this.growdeverRepository = pgHelper.client.manager.getRepository(GrowdeverEntity);
    this.cacheRepository = new CacheRedisRepository();
  }

  async createGrowdever(growdever: Growdever, addressUuid?: string): Promise<string> {
    const entity = new GrowdeverEntity();
    entity.uuid = growdever.getUuid();
    entity.name = growdever.getName();
    entity.cpf = growdever.getCPF();
    entity.username = growdever.getUsername();
    entity.password = growdever.getPassword();
    entity.status = growdever.getStatus();
    entity.skills = growdever.getSkills().join(SKILLS_SEPARATOR);
    if (addressUuid) entity.addressUuid = addressUuid;
    const savedGrowdever = await this.growdeverRepository.save(entity); // DATA MAPPER
    // const savedGrowdever = await entity.save(); // ACTIVE RECORD
    await this.cacheRepository.invalidate(GROWDEVERS_LIST_CACHE_KEY);
    return savedGrowdever.uuid;
  }

  async getAllGrowdevers(): Promise<Growdever[]> {
    const allGrowdeversCached = await this.cacheRepository.get(GROWDEVERS_LIST_CACHE_KEY)
    if (allGrowdeversCached) return allGrowdeversCached as Growdever[];

    const allGrowdevers = await this.growdeverRepository.find();
    const growdeversParsed = allGrowdevers.map((entity) => new Growdever(
      entity.name,
      entity.cpf,
      entity.username,
      entity.password,
      entity.getStatus(),
      stringSkillsToArray(entity.skills),
      entity.uuid,
    ));
    await this.cacheRepository.set(GROWDEVERS_LIST_CACHE_KEY, growdeversParsed);
    return growdeversParsed;
  }

  async getGrowdever(uuid: string): Promise<Growdever | undefined> {
    const growdever = await this.growdeverRepository.findOne({
      where: { uuid },
      relations: ['address', 'assessments'],
    });
    if (growdever) {
      return new Growdever(
        growdever.name,
        growdever.cpf,
        growdever.username,
        growdever.password,
        growdever.getStatus(),
        stringSkillsToArray(growdever.skills),
        growdever.uuid,
        growdever.address
          ? new Address(
            growdever.address?.street,
            growdever.address?.city,
            growdever.address?.uf,
            growdever.address?.createdAt,
            growdever.address?.updatedAt
          )
          : undefined,
        growdever.assessments?.length
          ? growdever.assessments.map((assessment)=> new Assessment(
            assessment.subject,
            assessment.grade,
            assessment.date,
            assessment.createdAt,
            assessment.updatedAt,
            assessment.uuid,
          ))
          : undefined,
      );
    }
  }

  async addSkills(uuid: string, skills: string[]): Promise<string | undefined> {
    const foundGrowdever = await this.growdeverRepository.findOne({ where: { uuid }});
    if (foundGrowdever) {
      foundGrowdever.skills = skills.join(SKILLS_SEPARATOR);
      const updatedGrowdever = await this.growdeverRepository.save(foundGrowdever);
      // const updatedGrowdever = await foundGrowdever.save();
      await this.cacheRepository.invalidate(GROWDEVERS_LIST_CACHE_KEY);
      return updatedGrowdever.uuid;
    }
  }

}