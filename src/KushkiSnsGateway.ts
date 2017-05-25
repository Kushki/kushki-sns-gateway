/**
 * Created by david on 5/23/17.
 */
import * as AWS from 'aws-sdk';
import {PublishResponse} from 'aws-sdk/clients/sns';
import {Validators} from 'utils/Validators';
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

    public async payedEfecty(event: string): Promise<void> {
        try {
            const stringValid: {random: string} = {
                random: event
            };
            const validator: Validators = new Validators(stringValid, 'string_model');
            validator.validate();
            await this.snsPublish(event);
        } catch (err) {
            throw new Error('error');
        }
    }
    private async snsPublish(event: string): Promise<PublishResponse> {
        AWS.config.region = this.region;
        const SNS: AWS.SNS = new AWS.SNS();

        return await SNS.publish({
            Message: event,
            TopicArn: this.topicArn
        }).promise();
    }
}
