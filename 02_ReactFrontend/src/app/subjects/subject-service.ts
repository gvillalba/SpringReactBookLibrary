import { BaseService } from '../core/services/base-service';
import { Subject } from '../books/model/Subject';

const pathSuffix: string = '/subjects';

export class SubjectService extends BaseService {

    constructor() {
        super();
    }

    async getSubjects(): Promise<Array<Subject>> {
        const url = `${SubjectService.baseUrl}` + pathSuffix;
        const books: Array<Subject> = await this.requests.get(url);
        return books;
    }

}