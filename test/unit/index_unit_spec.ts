/**
 * Created by david on 5/24/17.
 */
import * as AWS from 'aws-sdk-mock';
import * as chai from 'chai';
import {expect} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {KushkiSnsGateway} from 'src/KushkiSnsGateway';
import {SchemaHelper} from 'test/SchemaHelper';

chai.use(chaiAsPromised);
interface Istring {
    random: string;
}
let str: Istring;

describe('KushkiSnsGateway - ', () => {

    beforeEach(async () => {
        str = <Istring>await SchemaHelper.fakeSchema('string_model');
        AWS.mock('SNS', 'publish', str.random);
    });
    afterEach(() => {
        AWS.restore('SNS', 'publish');
    });
    it('check int snsGateway class with successful response', async () => {
        const kushkiSns: KushkiSnsGateway = new KushkiSnsGateway(str.random, str.random);

        return expect(kushkiSns.payedEfecty(str.random)).not.to.eventually.rejectedWith('error');
    });

    it('check snsGateway class with non successful response', async () => {
        AWS.restore('SNS', 'publish');
        const kushkiSns: KushkiSnsGateway = new KushkiSnsGateway(str.random, str.random);

        return expect(kushkiSns.payedEfecty(str.random)).to.eventually.rejectedWith('error');
    });
});
