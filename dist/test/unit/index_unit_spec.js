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
 * Created by david on 5/24/17.
 */
const AWS = require("aws-sdk-mock");
const chai = require("chai");
const chai_1 = require("chai");
const chaiAsPromised = require("chai-as-promised");
const KushkiSnsGateway_1 = require("src/KushkiSnsGateway");
const SchemaHelper_1 = require("test/SchemaHelper");
chai.use(chaiAsPromised);
let str;
describe('KushkiSnsGateway - ', () => {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        str = (yield SchemaHelper_1.SchemaHelper.fakeSchema('string_model'));
        AWS.mock('SNS', 'publish', str.random);
    }));
    afterEach(() => {
        AWS.restore('SNS', 'publish');
    });
    it('check int snsGateway class with successful response', () => __awaiter(this, void 0, void 0, function* () {
        const kushkiSns = new KushkiSnsGateway_1.KushkiSnsGateway(str.random, str.random);
        return chai_1.expect(kushkiSns.payedEfecty(str.random)).not.to.eventually.rejectedWith('error');
    }));
    it('check snsGateway class with non successful response', () => __awaiter(this, void 0, void 0, function* () {
        AWS.restore('SNS', 'publish');
        const kushkiSns = new KushkiSnsGateway_1.KushkiSnsGateway(str.random, str.random);
        return chai_1.expect(kushkiSns.payedEfecty(str.random)).to.eventually.rejectedWith('error');
    }));
});
