/**
 * Created by david on 5/25/17.
 */
import * as AWS from 'aws-sdk';
import * as chai from 'chai';
import {expect} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {KushkiSnsGateway} from 'src/KushkiSnsGateway';

chai.use(chaiAsPromised);

let topicArn: string;
let message: string;
let region: string;

describe('KushkiSnsGateway - ', () => {

    beforeEach(() => {
        region = 'us-east-1';
        message = 'patimarico';
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

    it('check snsGateway class with non successful response', (done: (err: Error) => void) => {
        topicArn = 'arn:aws:sns:us-east-1:073501845287:example-kushki';
        const kushkiSns: KushkiSnsGateway = new KushkiSnsGateway(topicArn, region);

        return expect(kushkiSns.payedEfecty(message)).to.eventually.rejected.and.notify(done);
    });
});
