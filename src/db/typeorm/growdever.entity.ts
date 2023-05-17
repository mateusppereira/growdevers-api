import { BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { AddressEntity } from './address.entity';
import { AssessmentEntity } from './assessment.entity';

@Entity({ name: 'growdevers' })
// export class GrowdeverEntity extends BaseEntity {
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
  addressUuid: string = '';

  @OneToOne(() => AddressEntity, { eager: true })
  @JoinColumn({ name: 'growdever_address_uuid' })
  address?: AddressEntity;

  @OneToMany(
    () => AssessmentEntity,
    (assessment) => assessment.growdever)
  assessments?: AssessmentEntity[];

  getStatus() : 'MATRICULADO' | 'ESTUDANDO' | 'FORMADO' {
    if (this.status != 'MATRICULADO' && this.status != 'ESTUDANDO' && this.status != 'FORMADO') throw new Error();
    return this.status;
  }
}
