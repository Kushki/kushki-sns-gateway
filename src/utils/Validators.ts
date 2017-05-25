/**
 * Created by david on 5/24/17.
 */
import * as Ajv from 'ajv';
import * as fs from 'fs';
import {KushkiError} from 'utils/KushkiError';

export type Models = 'string_model'
    | 'dynamo_records_output';
/**
 * Validators check valid schema for all classes.
 * @class PaymentReceipt
 */
export class Validators {
    private body: object;
    private schemaFile: Models;

    constructor(body: object, schemaFile: Models) {
        this.body = body;
        this.schemaFile = schemaFile;
    }

    public validate(): string | boolean {
        console.info(`Validate Model: ${this.schemaFile}`);
        const schema: object = JSON.parse(fs.readFileSync(`models/${this.schemaFile}.json`, 'utf8'));
        const ajv: Ajv.Ajv = new Ajv();
        ajv.addMetaSchema(JSON.parse(fs.readFileSync('schemas/json-schema-draft-04.json', 'utf8')));
        const validate: Ajv.ValidateFunction = ajv.compile(schema);
        const valid: boolean | Ajv.Thenable<void> = validate(this.body);
        if (validate.errors !== null) {
            console.warn(`Validation Erros: \n ${JSON.stringify(validate.errors)}`);
        }
        if (valid === false) {
            throw new KushkiError('K002');
        }

        return true;
    }
}
