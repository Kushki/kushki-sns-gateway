export declare type Models = 'string_model' | 'dynamo_records_output';
/**
 * Validators check valid schema for all classes.
 * @class PaymentReceipt
 */
export declare class Validators {
    private body;
    private schemaFile;
    constructor(body: object, schemaFile: Models);
    validate(): string | boolean;
}
