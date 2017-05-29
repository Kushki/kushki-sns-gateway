/**
 * Created by david on 5/23/17.
 */
/* tslint:disable:no-relative-imports */
import * as AWS from 'aws-sdk';
import {PublishResponse} from 'aws-sdk/clients/sns';
import {KushkiValidators} from './utils/KushkiValidators';
/**
 * KushkiSnsGateway it's a gateway from a dynamoDB event to sns.
 * @class KushkiSnsGateway
 */
export class KushkiSnsGateway {
    private topicArn: string;
    private region: string;

    constructor(topicArn: string, region: string) {
        this.topicArn = topicArn;
        this.region = region;
    }

    public async payedEfecty(event: string): Promise<PublishResponse> {
        try {
            const stringValid: {random: string} = {
                random: event
            };
            const validator: KushkiValidators = new KushkiValidators(stringValid, 'string_model');
            validator.validate();
            return await this.snsPublish(event);
        } catch (err) {
            throw err;
        }
    }
    private snsPublish(event: string): Promise<PublishResponse> {
        AWS.config.region = this.region;
        const SNS: AWS.SNS = new AWS.SNS();

        return SNS.publish({
            Message: event,
            TopicArn: this.topicArn
        }).promise();
    }
}
