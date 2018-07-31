import { BaseError, ErrorCode } from './base-error';

export class IllegalArgumentError extends BaseError {

    constructor(message: string) {
        super(message, ErrorCode.IllegalArgument);
    }
}