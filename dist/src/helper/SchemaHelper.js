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
const jsf = require("json-schema-faker");
/**
 * SchemaHelper gets random schemas with valid values.
 * @module SchemaHelper
 */
var SchemaHelper;
(function (SchemaHelper) {
    function fakeSchema(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = {
                $ref: `models/${name}.json`
            };
            return yield jsf.resolve(schema);
        });
    }
    SchemaHelper.fakeSchema = fakeSchema;
})(SchemaHelper = exports.SchemaHelper || (exports.SchemaHelper = {}));
