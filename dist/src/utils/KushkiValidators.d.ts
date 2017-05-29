export declare type Models = 'string_model' | 'dynamo_records_output';
/**
 * KushkiValidators check valid schema for all classes.
 * @class PaymentReceipt
 */
export declare class KushkiValidators {
    private body;
    private schemaFile;
    constructor(body: object, schemaFile: Models);
    validate(): string | boolean;
}
