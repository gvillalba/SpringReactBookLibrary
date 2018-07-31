import { ErrorCode } from './base-error';
import { ApiRequestError } from './api-request-error';
import * as HttpStatus from 'http-status-codes';

export class InternalServerError extends ApiRequestError {

    static isMatchingType(error: any): error is ApiRequestError {
        return (super.isMatchingType(error) && (<ApiRequestError> error).code === ErrorCode.InternalServerError);
    }

    constructor() {
        super(ApiRequestError.DEFAULT_MESSAGE, ErrorCode.InternalServerError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}