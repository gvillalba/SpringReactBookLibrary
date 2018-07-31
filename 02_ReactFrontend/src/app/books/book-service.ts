import { BaseService } from '../core/services/base-service';
import { Book } from './model/Book';

const pathSuffix: string = '/books';

export class BookService extends BaseService {

    constructor() {
        super();
    }

    async getBooks(): Promise<Array<Book>> {
        const url = `${BookService.baseUrl}` + pathSuffix;
        const books: Array<Book> = await this.requests.get(url);
        return books;
    }

    async getBooksByYear(year: number): Promise<Array<Book>> {
        const url = `${BookService.baseUrl}` + pathSuffix + '/year/' + year;
        const books: Array<Book> = await this.requests.get(url);
        return books;
    }

    async getBooksBySubject(subjectId: number): Promise<Array<Book>> {
        const url = `${BookService.baseUrl}` + pathSuffix + '/subject/' + subjectId;
        const books: Array<Book> = await this.requests.get(url);
        return books;
    }

    async getDistinctYearsByBook(): Promise<Array<number>> {
        const url = `${BookService.baseUrl}` + pathSuffix + '/years';
        const years: Array<number> = await this.requests.get(url);
        return years;
    }
}