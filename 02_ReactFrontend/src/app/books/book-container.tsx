import * as React from 'react';
import { BookService } from './book-service';
import { Book } from './model/Book';
import { BookTable } from './book-table';
import { Subject } from './model/Subject';
import { SubjectService } from '../subjects/subject-service';
import { SelectOption } from '../core/components/select-option';

export interface SubjectContainerProps {
}

export interface SubjectContainerState {
    books?: Array<Book>;
    subjects?: Array<Subject>;
    years?: Array<number>;
    filter: string;

}

export class BookContainer extends React.Component<SubjectContainerProps, SubjectContainerState> {

    bookService: BookService;
    subjectService: SubjectService;

    filters: Array<string>;

    constructor(props: SubjectContainerProps) {
        super(props);

        this.bookService = new BookService();
        this.subjectService = new SubjectService();

        this.state = {
            books: undefined,
            subjects: undefined,
            filter: ''
        };

        this.onFilterByYear = this.onFilterByYear.bind(this);
        this.onFilterBySubject = this.onFilterBySubject.bind(this);

        this.onChangeFilters = this.onChangeFilters.bind(this);

        this.filters = ['Year', 'Subject'];
    }

    async componentDidMount() {
        await this.loadAllBooks();
        await this.loadAllSubjects();
        await this.loadAllYears();
    }

    async componentWillReceiveProps(nextProps: SubjectContainerProps, nextState: SubjectContainerProps) {
        try {
            const books: Array<Book> = await this.bookService.getBooks();
            const subjects: Array<Subject> = await this.subjectService.getSubjects();
            const years: Array<number> = await this.bookService.getDistinctYearsByBook();

            this.setState({
                books: books,
                subjects: subjects,
                years: years
            });
        } catch (e) {
            console.log(JSON.stringify(e));
        }
    }

    render() {
        if (this.state.books === undefined || this.state.subjects === undefined || this.state.years === undefined) {
            return '';
        }

        return (
            <div>
                <label>Filter By: </label>
                <SelectOption id="filter-dropdown" title="Filter By: " data={this.filters} onChange={this.onChangeFilters}/>
                <BookTable
                    books={this.state.books}
                    subjects={this.state.subjects}
                    years={this.state.years}
                    onFilterByYear={this.onFilterByYear}
                    onFilterBySubject={this.onFilterBySubject}
                    filter={this.state.filter}
                />\
            </div>
        );
    }

    private async loadAllBooks() {
        try {
            const books: Array<Book> = await this.bookService.getBooks();
            this.setState({
                books: books
            });

        } catch (e) {
            console.log(JSON.stringify(e));
        }
    }

    private async loadAllSubjects() {
        try {
            const subjects: Array<Subject> = await this.subjectService.getSubjects();
            this.setState({
                subjects: subjects
            });

        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    private async loadAllYears() {
        try {
            const years: Array<number> = await this.bookService.getDistinctYearsByBook();
            this.setState({
                years: years
            });

        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    private onChangeFilters(e: any) {
        const filter: string = e.target.value;
        this.setState({
            filter: filter
        });
    }

    private async onFilterByYear(year: number) {
        try {
            if (this.isZero(year)) {
                this.loadAllBooks();
                return;
            }
            const books: Array<Book> = await this.bookService.getBooksByYear(year);
            this.setState({
                books: books
            });
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    private async onFilterBySubject(subjectId: number) {
        try {
            if (this.isZero(subjectId)) {
                this.loadAllBooks();
                return;
            }
            const books: Array<Book> = await this.bookService.getBooksBySubject(subjectId);
            this.setState({
                books: books
            });
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    private isZero(subjectId: number) {
        return '' + subjectId === '' + 0;
    }
}