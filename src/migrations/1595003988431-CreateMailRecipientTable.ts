import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateMailRecipientTable1595003988431
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    global.console.log('Migrating', __filename);

    await queryRunner.createTable(
      new Table({
        name: 'sys_mail_recipients',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            unsigned: true,
            generationStrategy: 'increment',
          },
          { name: 'mail_id', type: 'bigint' },
          {
            name: 'email',
            type: 'varchar',
            comment: 'This is secondary recipients such as cc, bcc',
          },
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

    // await queryRunner.createForeignKey(
    //   'sys_mail_recipients',
    //   new TableForeignKey({
    //     columnNames: ['mail_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'sys_mail_logs',
    //     onDelete: 'NO ACTION',
    //     name: 'sys_mail_recipient_mail_id_foreign',
    //   }),
    // );

    global.console.log('Migrated', __filename);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey(
    //   'sys_mail_recipients',
    //   'sys_mail_recipients_mail_id_foreign',
    // );

    await queryRunner.dropTable(new Table({ name: 'sys_mail_recipients' }));

    global.console.log('Reverted Migration ', __filename);
  }
}