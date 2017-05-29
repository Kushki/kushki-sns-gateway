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
 * Created by david on 5/23/17.
 */
/* tslint:disable:no-relative-imports */
const AWS = require("aws-sdk");
const KushkiValidators_1 = require("./utils/KushkiValidators");
/**
 * KushkiSnsGateway it's a gateway from a dynamoDB event to sns.
 * @class KushkiSnsGateway
 */
class KushkiSnsGateway {
    constructor(topicArn, region) {
        this.topicArn = topicArn;
        this.region = region;
    }
    payedEfecty(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stringValid = {
                    random: event
                };
                const validator = new KushkiValidators_1.KushkiValidators(stringValid, 'string_model');
                validator.validate();
                return yield this.snsPublish(event);
            }
            catch (err) {
                throw err;
            }
        });
    }
    snsPublish(event) {
        AWS.config.region = this.region;
        const SNS = new AWS.SNS();
        return SNS.publish({
            Message: event,
            TopicArn: this.topicArn
        }).promise();
    }
}
exports.KushkiSnsGateway = KushkiSnsGateway;
