import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

/**
 * entity definition against the sys_mail_recipients table
 * @export
 * @class  MailLog
 * @extends {BaseDefinition}
 */
@Entity('sys_mail_recipients')
export class MailRecipient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mail_id: number;

  @Column()
  email: string;
}