/**
 * Created by david on 5/24/17.
 */

export type ErrorCode = 'K000' | 'K001' | 'K002';

/**
 * KushkiError Generic captured error.
 * @class KushkiError
 */
export class KushkiError extends Error {
    public code: ErrorCode;

    constructor(code: ErrorCode) {
        super(code);
        this.code = code;
        Object.setPrototypeOf(this, KushkiError.prototype);
    }

    public getMessage(): string {
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
