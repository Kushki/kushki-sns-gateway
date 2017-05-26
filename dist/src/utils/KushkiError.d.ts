/**
 * Created by david on 5/24/17.
 */
export declare type ErrorCode = 'K000' | 'K001' | 'K002';
/**
 * KushkiError Generic captured error.
 * @class KushkiError
 */
export declare class KushkiError extends Error {
    code: ErrorCode;
    constructor(code: ErrorCode);
    getMessage(): string;
}
