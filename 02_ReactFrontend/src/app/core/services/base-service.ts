import { requests } from '../util/index';

export abstract class BaseService {
    static baseUrl = requests.getBaseUrlConfiguration();

    requests = requests;
}