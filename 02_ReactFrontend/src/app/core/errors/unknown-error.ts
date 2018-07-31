import { BaseError, ErrorCode } from './base-error';

export class UnknownError extends BaseError {

    constructor(message: string) {
        super(message, ErrorCode.Unknown);
    }
}