import { BaseError } from './base-error';

export class ApiRequestError extends BaseError {
    public static ERROR_CODE = 'Error.ApiRequestError';
    protected static DEFAULT_MESSAGE = 'An error occurred with the backend API.';

    public status: number = 0;

    static isMatchingType(error: any): error is ApiRequestError {
        return (super.isMatchingType(error) && (<ApiRequestError> error).status !== undefined);
    }

    constructor(message: string = ApiRequestError.DEFAULT_MESSAGE, code: string = ApiRequestError.ERROR_CODE, status?: number) {
        super(message, code);
        this.status = status ? status : 0;
    }
}