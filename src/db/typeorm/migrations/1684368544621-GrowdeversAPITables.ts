import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class GrowdeversAPITables1684368544621 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // criar tabela addresses
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          new TableColumn({ name: 'address_uuid', type: 'varchar', isPrimary: true }),
          new TableColumn({ name: 'address_street', type: 'varchar' }),
          new TableColumn({ name: 'address_city', type: 'varchar' }),
          new TableColumn({ name: 'address_uf', type: 'varchar' }),
          new TableColumn({ name: 'address_created_at', type: 'varchar' }),
          new TableColumn({ name: 'address_updated_at', type: 'varchar' }),
        ]
      })
    );

    // criar tabela growdevers
    await queryRunner.createTable(
      new Table({
        name: 'growdevers',
        columns: [
          new TableColumn({ name: 'growdever_uuid', type: 'varchar', isPrimary: true }),
          new TableColumn({ name: 'growdever_name', type: 'varchar' }),
          new TableColumn({ name: 'growdever_cpf', type: 'varchar' }),
          new TableColumn({ name: 'growdever_username', type: 'varchar' }),
          new TableColumn({ name: 'growdever_password', type: 'varchar' }),
          new TableColumn({ name: 'growdever_skills', type: 'varchar' }),
          new TableColumn({ name: 'growdever_address_uuid', type: 'varchar' }),
        ],
        foreignKeys: [
          {
            columnNames: ['growdever_address_uuid'],
            referencedTableName: 'addresses',
            referencedColumnNames: ['address_uuid'],
          },
        ]
      })
    );

    // criar tabela assessments
    await queryRunner.createTable(
      new Table({
        name: 'assessments',
        columns: [
          new TableColumn({ name: 'assessment_uuid', type: 'varchar', isPrimary: true }),
          new TableColumn({ name: 'assessment_subject', type: 'varchar' }),
          new TableColumn({ name: 'assessment_date', type: 'varchar' }),
          new TableColumn({ name: 'assessment_grade', type: 'int' }),
          new TableColumn({ name: 'assessment_created_at', type: 'varchar' }),
          new TableColumn({ name: 'assessment_updated_at', type: 'varchar' }),
          new TableColumn({ name: 'assessment_growdever_uuid', type: 'varchar' }),
        ],
        foreignKeys: [
          {
            columnNames: ['assessment_growdever_uuid'],
            referencedTableName: 'growdevers',
            referencedColumnNames: ['growdever_uuid'],
          },
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('assessments');
    await queryRunner.dropTable('growdevers');
    await queryRunner.dropTable('addresses');
  }
}
