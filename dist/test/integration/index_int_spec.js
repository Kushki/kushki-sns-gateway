"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        topicArn = 'arn:aws:sns:us-east-1:073501845287:example-kushki';
        message = 'aaaaaaaa';
        region = 'us-east-1';
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    }));
    it('check snsGateway class with successful response', () => __awaiter(this, void 0, void 0, function* () {
        const kushkiSns = new KushkiSnsGateway_1.KushkiSnsGateway(topicArn, region);
        return chai_1.expect(kushkiSns.payedEfecty(message)).not.to.eventually.rejectedWith('error');
    }));
    it('check snsGateway class with non successful response', () => __awaiter(this, void 0, void 0, function* () {
        const kushkiSns = new KushkiSnsGateway_1.KushkiSnsGateway(topicArn, region);
        return chai_1.expect(kushkiSns.payedEfecty(message)).to.eventually.rejectedWith('error');
    }));
});
