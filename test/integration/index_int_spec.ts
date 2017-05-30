/**
 * Created by david on 5/29/17.
 */
import {KushkiSnsGateway} from '@kushki/sns-gateway';
import * as AWS from 'aws-sdk';
import * as chai from 'chai';
import {expect} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
let topicArn: string;
let message: string;
let region: string;

describe('KushkiSnsGateway - ', () => {

    beforeEach(() => {
        region = 'us-east-1';
        message = 'pato123';
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    });
    it('check snsGateway class with successful response', (done: (err: Error) => void) => {
        topicArn = 'arn:aws:sns:us-east-1:073501845287:example-kushki';
        const kushkiSns: KushkiSnsGateway = new KushkiSnsGateway(topicArn, region);

        return expect(kushkiSns.payedEfecty(message)).to.eventually.notify(done);
    });
});
