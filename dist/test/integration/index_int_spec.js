"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by david on 5/25/17.
 */
const AWS = require("aws-sdk");
const chai = require("chai");
const chai_1 = require("chai");
const chaiAsPromised = require("chai-as-promised");
const KushkiSnsGateway_1 = require("src/KushkiSnsGateway");
chai.use(chaiAsPromised);
let topicArn;
let message;
let region;
describe('KushkiSnsGateway - ', () => {
    beforeEach(() => {
        region = 'us-east-1';
        message = 'aaaaaaaa';
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    });
    it('check snsGateway class with successful response', (done) => {
        topicArn = 'arn:aws:sns:us-east-1:073501845287:example-kushki';
        const kushkiSns = new KushkiSnsGateway_1.KushkiSnsGateway(topicArn, region);
        return chai_1.expect(kushkiSns.payedEfecty(message)).to.eventually.notify(done);
    });
    it('check snsGateway class with non successful response', (done) => {
        topicArn = 'arn:aws:sns:us-east-1:073501845287:example-kushki';
        const kushkiSns = new KushkiSnsGateway_1.KushkiSnsGateway(topicArn, region);
        return chai_1.expect(kushkiSns.payedEfecty(message)).to.eventually.rejected.and.notify(done);
    });
});
