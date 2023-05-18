import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddEmailToGrowdevers1684370687754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'growdevers',
      new TableColumn({
        name: 'growdever_email',
        type: 'varchar',
        length: '50',
        default: '\'N/A\''
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('growdevers', 'growdever_email');
  }
}
