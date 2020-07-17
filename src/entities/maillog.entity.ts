import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

/**
 * entity definition against the sys_mail_logs table
 * @export
 * @class  MailLog
 * @extends {BaseDefinition}
 */
@Entity('sys_mail_logs')
export class MailLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column()
  subject: string;

  @Column()
  email: string;
}