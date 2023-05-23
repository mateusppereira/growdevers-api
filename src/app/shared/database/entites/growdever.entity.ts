import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'growdevers' })
export class GrowdeverEntity {
  @PrimaryColumn({ name: 'growdever_uuid' })
  uuid: string = '';
  
  @Column({ name: 'growdever_name' })
  name: string = '';
  
  @Column({ name: 'growdever_cpf' })
  cpf: string = '';
  
  @Column({ name: 'growdever_username' })
  username: string = '';
  
  @Column({ name: 'growdever_password' })
  password: string = '';
  
  @Column({ name: 'growdever_status' })
  status: string = '';
  
  @Column({ name: 'growdever_skills' })
  skills: string = '';

  @Column({ name: 'growdever_address_uuid' })
  addressUuid?: string = undefined;

  getStatus() : 'MATRICULADO' | 'ESTUDANDO' | 'FORMADO' {
    if (this.status != 'MATRICULADO' && this.status != 'ESTUDANDO' && this.status != 'FORMADO') throw new Error();
    return this.status;
  }
}
