export enum ErrorCode {
    // 4xx errors
    BadRequest = 'Error.BadRequest',
    Conflict = 'Error.Conflict',
    Forbidden = 'Error.Forbidden',
    NotFound = 'Error.NotFound',
    Unauthorized = 'Error.Unauthorized',
    // 5xx errors
    ServiceUnavailable = 'Error.ServiceUnavailable',
    InternalServerError = 'Error.InternalServerError',
    Unknown = 'Error.General',
    // application errors
    ObjectValidation = 'Error.ObjectValidationError',
    IllegalArgument = 'Error.General'
}

export class BaseError extends Error {
    public code: string;

    static isMatchingType(error: any): error is BaseError {
        return (<BaseError> error).code !== undefined && (<BaseError> error).message !== undefined;
    }

    constructor(message: string, code: string) {
        super(message);
        this.code = code;
    }
}