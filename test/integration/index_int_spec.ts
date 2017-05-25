/**
 * Created by david on 5/25/17.
 */
import * as AWS from 'aws-sdk';
import * as AWSM from 'aws-sdk-mock';
import * as chai from 'chai';
import {expect} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {KushkiSnsGateway} from 'src/KushkiSnsGateway';

chai.use(chaiAsPromised);

let topicArn: string;
let message: string;
let region: string;

describe('KushkiSnsGateway - ', () => {

    beforeEach(async () => {
       topicArn = 'arn:aws:sns:us-east-1:073501845287:example-kushki';
       message = 'vamos a comer';
       region = 'us-east-1';
        AWS.config.update({
            accessKeyId: process.env.accessKeyId,
            secretAccessKey: process.env.secretAccessKey});
    });
    it('check snsGateway class with successful response', async () => {
        const kushkiSns: KushkiSnsGateway = new KushkiSnsGateway(topicArn, region);

        return expect(kushkiSns.payedEfecty(message)).not.to.eventually.rejectedWith('error');
    });

    it('check snsGateway class with non successful response', async () => {
        AWSM.restore('SNS', 'publish');
        const kushkiSns: KushkiSnsGateway = new KushkiSnsGateway(topicArn, region);

        return expect(kushkiSns.payedEfecty(message)).to.eventually.rejectedWith('error');
    });
});
