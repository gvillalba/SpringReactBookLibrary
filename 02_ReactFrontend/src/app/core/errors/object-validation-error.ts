import { BaseError, ErrorCode } from './base-error';

export class ObjectValidationError extends BaseError {

    constructor(message: string = 'Object is not valid.') {
        super(message, ErrorCode.ObjectValidation);
    }
}