/**
 * Created by david on 5/24/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * KushkiError Generic captured error.
 * @class KushkiError
 */
class KushkiError extends Error {
    constructor(code) {
        super(code);
        this.code = code;
        Object.setPrototypeOf(this, KushkiError.prototype);
    }
    getMessage() {
        switch (this.code) {
            case 'K001': {
                return 'Ha ocurrido un error inseperado';
            }
            case 'K002': {
                return 'Cuerpo del objeto mal formado';
            }
            default: {
                return 'Ha ocurrido un error inseperado';
            }
        }
    }
}
exports.KushkiError = KushkiError;
