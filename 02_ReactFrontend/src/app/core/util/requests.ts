
import {
    ApiRequestError,
    BadRequestError,
    ConflictError,
    ForbiddenError,
    InternalServerError,
    NotFoundError,
    ServiceUnavailableError,
    UnauthorizedError
} from '../errors/index';
import * as HttpStatus from 'http-status-codes';

export const baseRequestUrl = getBaseUrlConfiguration();

export const requests = {
    get: getRequest,
    post: postRequest,
    put: putRequest,
    delete: deleteRequest,
    getDefaultHeaders: getDefaultHeaders,
    getBaseUrlConfiguration: getBaseUrlConfiguration
};

async function getRequest(url: string): Promise<any> {
    let response: Response = await makeRequest(url, generateBaseRequestConfig());
    return await response.json();
}

async function deleteRequest(url: string) {
    let requestConfig = generateBaseRequestConfig();
    requestConfig.method = 'DELETE';

    await makeRequest(url, requestConfig);
}

async function postRequest(url: string, body: any) {
    let requestConfig: RequestInit = {
        method: 'POST',
        headers: getDefaultHeaders(),
        body: JSON.stringify(body)
    };

    let response: Response = await makeRequest(url, requestConfig);
    return await response.json();
}

async function putRequest(url: string, body: any) {
    let requestConfig: RequestInit = {
        method: 'PUT',
        headers: getDefaultHeaders(),
        body: JSON.stringify(body)
    };

    let response: Response = await makeRequest(url, requestConfig);
    return await response.json();
}

async function makeRequest(url: string, requestConfiguration: RequestInit): Promise<Response> {
    let response: Response;

    try {
        response = await fetch(url, requestConfiguration);
    } catch (error) {
        console.log(JSON.stringify(error));
        throw new ApiRequestError();
    }

    if (!response.ok) {
        switch (response.status) {
            // 4xx client error
            case HttpStatus.BAD_REQUEST:
                throw new BadRequestError();
            case HttpStatus.UNAUTHORIZED:
                throw new UnauthorizedError();
            case HttpStatus.FORBIDDEN:
                throw new ForbiddenError();
            case HttpStatus.NOT_FOUND:
                throw new NotFoundError();
            case HttpStatus.CONFLICT:
                throw new ConflictError();
            // 5xx client error
            case HttpStatus.INTERNAL_SERVER_ERROR:
                throw new InternalServerError();
            case HttpStatus.SERVICE_UNAVAILABLE:
                throw new ServiceUnavailableError();
            default:
                throw new ApiRequestError(
                    `${requestConfiguration.method} request to '${url}' failed.`,
                    ApiRequestError.ERROR_CODE,
                    response.status);
        }
    }

    return response;
}

function generateBaseRequestConfig(): RequestInit {
    return {
        headers: getDefaultHeaders()
    };
}

function getDefaultHeaders(): HeadersInit {
    return {
        'Content-Type': 'application/json'
    };
}

function getBaseUrlConfiguration() {
    let baseUrl;

    if (process.env.REACT_APP_API_BASE_URL_AUTO === 'true') {
        baseUrl = `${window.location.protocol}//${window.location.hostname}:${process.env.REACT_APP_API_PORT}`;
    } else {
        baseUrl = process.env.REACT_APP_API_BASE_URL;
    }

    return baseUrl;
}