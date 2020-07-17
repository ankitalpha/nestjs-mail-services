import {
  MigrationInterface,
  QueryRunner,
  Table,
} from 'typeorm';

export class CreateMailLogsTable1595002661533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    global.console.log('Migrating', __filename);

    await queryRunner.createTable(
      new Table({
        name: 'sys_mail_logs',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            unsigned: true,
            generationStrategy: 'increment',
          },
          { name: 'body', type: 'text' },
          { name: 'email', type: 'varchar', 'comment' : 'This is primary recipients' },
          { name: 'subject', type: 'varchar'},
          {
            name: 'created_by',
            type: 'bigint',
            isNullable: true,
            unsigned: true,
          },
          {
            name: 'updated_by',
            type: 'bigint',
            isNullable: true,
            unsigned: true,
          },
          { name: 'deleted_at', type: 'datetime', isNullable: true },
          { name: 'updated_at', type: 'datetime', isNullable: true },
          { name: 'created_at', type: 'datetime', isNullable: true },
        ],
      }),
      true,
    );

    global.console.log('Migrated', __filename);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(new Table({ name: 'sys_mail_logs' }));

    global.console.log('Reverted Migration ', __filename);
  }
}
