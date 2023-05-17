import { BaseEntity, Entity, Column, PrimaryColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity({ name: 'addresses' })
export class AddressEntity extends BaseEntity {
  @PrimaryColumn({ name: 'address_uuid' })
  uuid: string = '';

  @Column({ name: 'address_street' })
  street: string = '';

  @Column({ name: 'address_city' })
  city: string = '';

  @Column({ name: 'address_uf' })
  uf: string = '';

  @Column({ name: 'address_created_at' })
  createdAt: string = '';

  @Column({ name: 'address_updated_at' })
  updatedAt: string = '';

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}
