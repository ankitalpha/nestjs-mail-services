import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from '../../common/services/common.service';
import { MailLog } from 'src/entities/maillog.entity';

/**
 * Service on top of MailLog entity
 * @export
 * @class MailLogServices
 * @extends {CommonService<MailLog>}
 */
@Injectable()
export class MailLogServices extends CommonService<MailLog> {
    /**
     * Creates an instance of MailLogServices.
     * @param {Repository<MailLog>} r
     * @memberof MailLogServices
     */
    constructor(
        @InjectRepository(MailLog)
        private readonly r: Repository<MailLog>
    ) {
        super(r);
    }
}