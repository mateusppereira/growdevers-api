import { BaseEntity, Entity, Column, PrimaryColumn, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from 'typeorm';
import { GrowdeverEntity } from './growdever.entity';

@Entity({ name: 'assessments' })
export class AssessmentEntity {
  @PrimaryColumn({ name: 'assessment_uuid' })
  uuid: string = '';

  @Column({ name: 'assessment_subject' })
  subject: string = '';

  @Column({ name: 'assessment_date' })
  date: string = '';

  @Column({ name: 'assessment_grade' })
  grade: number = 0;

  @Column({ name: 'assessment_created_at' })
  createdAt: string = '';

  @Column({ name: 'assessment_updated_at' })
  updatedAt: string = '';

  @Column({ name: 'assessment_growdever_uuid' })
  growdeverUuid: string = '';

  @ManyToOne(() => GrowdeverEntity, { eager: true })
  @JoinColumn({ name: 'assessment_growdever_uuid' })
  growdever?: GrowdeverEntity;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  constructor(entity: Partial<AssessmentEntity>) {
    Object.assign(this, entity)
  }
}
