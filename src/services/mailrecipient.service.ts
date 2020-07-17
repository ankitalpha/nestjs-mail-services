import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from '../../common/services/common.service';
import { MailRecipient } from 'src/entities/mailrecipient.entity';

/**
 * Service on top of MailRecipient entity
 * @export
 * @class MailRecipientService
 * @extends {CommonService<MailRecipient>}
 */
@Injectable()
export class MailRecipientService extends CommonService<MailRecipient> {
  /**
   * Creates an instance of MailRecipientService.
   * @param {Repository<MailRecipient>} r
   * @memberof MailRecipientService
   */
  constructor(
    @InjectRepository(MailRecipient)
    private readonly r: Repository<MailRecipient>,
  ) {
    super(r);
  }
}