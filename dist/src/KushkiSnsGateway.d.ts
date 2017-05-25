export declare class KushkiSnsGateway {
    private topicArn;
    constructor(topicArn: string);
    payedEfecty(event: string): Promise<void>;
    private snsPublish(event);
}
