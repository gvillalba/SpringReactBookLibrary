import { ErrorCode } from './base-error';
import { ApiRequestError } from './api-request-error';
import * as HttpStatus from 'http-status-codes';

export class ForbiddenError extends ApiRequestError {

    static isMatchingType(error: any): error is ApiRequestError {
        return (super.isMatchingType(error) && (<ApiRequestError> error).code === ErrorCode.Forbidden);
    }

    constructor() {
        super(ApiRequestError.DEFAULT_MESSAGE, ErrorCode.Forbidden, HttpStatus.FORBIDDEN);
    }
}