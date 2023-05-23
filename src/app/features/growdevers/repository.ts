import { Repository } from 'typeorm';
import { DatabaseConnection } from '../../../main/database';
import { Growdever } from '../../models/growdever';
import { GrowdeverEntity } from '../../shared/database/entites/growdever.entity';

const SKILLS_SEPARATOR = '|';

function stringSkillsToArray(skills: string): string[] {
  return skills.length > 0 ? skills.split(SKILLS_SEPARATOR) : [];
}

export class GrowdeverRepository {
  private growdeverRepository: Repository<GrowdeverEntity>;

  constructor() {
    this.growdeverRepository = DatabaseConnection.client.manager.getRepository(GrowdeverEntity);
  }

  async createGrowdever(growdever: Growdever, addressUuid?: string): Promise<Growdever> {
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
    return new Growdever(
      savedGrowdever.name,
      savedGrowdever.cpf,
      savedGrowdever.username,
      savedGrowdever.password,
      savedGrowdever.getStatus(),
      stringSkillsToArray(savedGrowdever.skills),
      savedGrowdever.uuid,
    )
  }

  async getAllGrowdevers(): Promise<Growdever[]> {
    const allGrowdevers = await this.growdeverRepository.find();
    return allGrowdevers.map((entity) => new Growdever(
      entity.name,
      entity.cpf,
      entity.username,
      entity.password,
      entity.getStatus(),
      stringSkillsToArray(entity.skills),
      entity.uuid,
    ));
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
      );
    }
  }

  async addSkills(uuid: string, skills: string[]): Promise<string | undefined> {
    const foundGrowdever = await this.growdeverRepository.findOne({ where: { uuid }});
    if (foundGrowdever) {
      foundGrowdever.skills = skills.join(SKILLS_SEPARATOR);
      const updatedGrowdever = await this.growdeverRepository.save(foundGrowdever);
      // const updatedGrowdever = await foundGrowdever.save();
      return updatedGrowdever.uuid;
    }
  }

}