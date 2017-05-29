"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by david on 5/24/17.
 */
const Ajv = require("ajv");
const fs = require("fs");
const KushkiError_1 = require("src/utils/KushkiError");
/**
 * KushkiValidators check valid schema for all classes.
 * @class PaymentReceipt
 */
class Validators {
    constructor(body, schemaFile) {
        this.body = body;
        this.schemaFile = schemaFile;
    }
    validate() {
        console.info(`Validate Model: ${this.schemaFile}`);
        const schema = JSON.parse(fs.readFileSync(`models/${this.schemaFile}.json`, 'utf8'));
        const ajv = new Ajv();
        ajv.addMetaSchema(JSON.parse(fs.readFileSync('schemas/json-schema-draft-04.json', 'utf8')));
        const validate = ajv.compile(schema);
        const valid = validate(this.body);
        if (validate.errors !== null) {
            console.warn(`Validation Erros: \n ${JSON.stringify(validate.errors)}`);
        }
        if (valid === false) {
            throw new KushkiError_1.KushkiError('K002');
        }
        return true;
    }
}
exports.Validators = Validators;
