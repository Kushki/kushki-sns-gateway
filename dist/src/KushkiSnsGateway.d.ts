/**
 * KushkiSnsGateway it's a gateway from a dynamoDB event to sns.
 * @class KushkiSnsGateway
 */
export declare class KushkiSnsGateway {
    private topicArn;
    private region;
    constructor(topicArn: string, region: string);
    payedEfecty(event: string): Promise<void>;
    private snsPublish(event);
}
