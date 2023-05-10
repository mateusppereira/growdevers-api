import { Growdever } from '../models/growdever';
import { query } from '../db/index';

const SKILLS_SEPARATOR = '|';
function stringSkillsToArray(skills: string): string[] {
  return skills.length > 0 ? skills.split(SKILLS_SEPARATOR) : [];
}
export class GrowdeverRepository {

  async createGrowdever(growdever: Growdever): Promise<string> {
    const insertSQL = `insert into growdevers
    (growdever_uuid, growdever_name, growdever_cpf, growdever_username, growdever_password, growdever_status, growdever_skills)
    values ($1, $2, $3, $4, $5, $6, $7)`;
    const paramsSQL = [
      growdever.getUuid(),
      growdever.getName(),
      growdever.getCPF(),
      growdever.getUsername(),
      growdever.getPassword(),
      growdever.getStatus(),
      growdever.getSkills().join(SKILLS_SEPARATOR),
    ];
    console.log('[growdever-repository] Insert SQLparams', paramsSQL);
    const result = await query(insertSQL, paramsSQL);
    if (result.rowCount === 1) {
      return growdever.getUuid();
    }
    throw new Error('Error while inserting growdever');
  }

  async getAllGrowdevers(): Promise<Growdever[]> {
    const selectAllQuery = 'select * from growdevers';
    const { rows } = await query(selectAllQuery, []);
    const growdevers = rows.map((row: any) => {
      return new Growdever(
        row['growdever_name'],
        row['growdever_cpf'],
        row['growdever_username'],
        row['growdever_password'],
        row['growdever_status'],
        stringSkillsToArray(row['growdever_skills']),
        row['growdever_uuid'],
      )
    });
    return growdevers;
  }

  async getGrowdever(uuid: string): Promise<Growdever | undefined> {
    const selectGrowdever = 'select * from growdevers where growdever_uuid = $1';
    const selectParams = [uuid];

    const result = await query(selectGrowdever, selectParams);
    // {
    //   rows: [
    //     { growdever_uuid: 'djas', growdever_name: 'asdasd', ... },
    //   ]
    // }

    if(result.rows.length > 0) {
      const growdeverFound = new Growdever(
        result.rows[0]['growdever_name'],
        result.rows[0]['growdever_cpf'],
        result.rows[0]['growdever_username'],
        result.rows[0]['growdever_password'],
        result.rows[0]['growdever_status'],
        stringSkillsToArray (result.rows[0]['growdever_skills']),
          result.rows[0]['growdever_uuid'],
      );

      return growdeverFound;
    }

  }

  async addSkills(uuid: string, skills: string[]): Promise<string|undefined> {

    const addSkillSQL =  'update growdevers set growdever_skills = $1 where growdever_uuid = $2'
    const updateparams = [skills.join(SKILLS_SEPARATOR), uuid]
    const result = await query(addSkillSQL, updateparams)

    if(result.rowCount > 0){
      return uuid
    }
  
  }

}