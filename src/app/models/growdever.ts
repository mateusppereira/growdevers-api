import { v4 as uuidv4 } from 'uuid';
import { ValidationError } from '../shared/exceptions/validationError';

const SKILLS_VALIDAS = ['Dedicado', 'Criativo', 'Pro-ativo'];
export class Growdever {
  constructor(
    private name: string,
    private cpf: string,
    private username: string,
    private password: string,
    private status: 'MATRICULADO' | 'ESTUDANDO' | 'FORMADO' = 'MATRICULADO',
    private skills: string[] = [],
    private uuid: string = uuidv4(),
  ) {
  }

  getUuid() : string {
    return this.uuid;
  }

  getName() : string {
    return this.name;
  }

  getUsername() : string {
    return this.username;
  }

  getPassword() : string {
    return this.password;
  }

  getCPF() : string {
    return this.cpf;
  }

  getStatus() : 'MATRICULADO' | 'ESTUDANDO' | 'FORMADO' {
    return this.status;
  }

  getSkills() : string[] {
    return this.skills;
  }

  addSkills(skill:string): void {
    if(SKILLS_VALIDAS.map(i => i.toLowerCase()).includes(skill.toLowerCase())) {
      this.skills.push(skill);
    } else {
      const error = new ValidationError('Skill invalida')
      throw error;
    }
  }

  removeSkills(skill:string): void {
    if (!SKILLS_VALIDAS.includes(skill)) {
      throw new ValidationError('Skill não existe.');
    }
    if (this.skills.includes(skill)){
      const indexOf = this.skills.indexOf(skill);
      this.skills.splice(indexOf, 1);
    }
  }
}