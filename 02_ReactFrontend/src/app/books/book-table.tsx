import * as React from 'react';
import { Book } from './model/Book';
import { Table } from 'react-bootstrap';
import { BookSampler } from './book-sampler';
import { Subject } from './model/Subject';
import { SelectOption } from '../core/components/select-option';
import { zero, NON_BREAKING_SPACE } from '../core/components';

interface BookTableProps {
    books: Array<Book>;
    subjects: Array<Subject>;
    years: Array<number>;
    onFilterByYear: Function;
    onFilterBySubject: Function;
    filter: string;
}

export class BookTable extends React.Component<BookTableProps> {

    bookSampler: BookSampler;

    constructor(props: BookTableProps) {
        super(props);

        this.bookSampler = new BookSampler();

        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    {this.renderTableFilters()}
                    {this.renderTableHeader()}
                </thead>
                <tbody>
                    {this.renderTableBody()}
                </tbody>
            </Table>
        );
    }

    private renderTableFilters() {
        let visible: boolean = true;
        if (this.props.filter !== undefined) {
            visible = (this.props.filter === 'Year');
        }
        return (
            <tr>
                <th>{NON_BREAKING_SPACE}</th>
                <th>{NON_BREAKING_SPACE}</th>
                <th>{NON_BREAKING_SPACE}</th>
                <th>{NON_BREAKING_SPACE}</th>
                <th>{NON_BREAKING_SPACE}</th>
                <th>{NON_BREAKING_SPACE}</th>
                <th>{NON_BREAKING_SPACE}</th>
                <th>{NON_BREAKING_SPACE}</th>
                <th>
                     <SelectOption id="year-dropdown" title="year" data={this.props.years} onChange={this.onChangeYear} visible={visible}/>
                </th>
                <th>
                    {this.renderSubjectFilter()}
                </th>
            </tr>
        );
    }

    private renderSubjectFilter() {
        if (this.props.subjects === undefined) {
            return '';
        }

        let visible: boolean = true;
        if (this.props.filter !== undefined) {
            visible = (this.props.filter === 'Subject');
            if (!visible) {
                return '';
            }
        }

        const subjects: Array<Subject> = this.props.subjects;

        return (
            <select
                id="subject-dropdown"
                title="Subject"
                onChange={this.onChangeSubject}
            >
                <option value={zero}>{NON_BREAKING_SPACE}</option>
                {subjects.map(subject => (
                    <option value={subject.id}>{subject.description}</option>
                ))}
            </select>
        );
    }

    private onChangeYear(e: any) {
        const year: number = e.target.value;
        this.props.onFilterByYear(year);
    }

    private onChangeSubject(e: any) {
        const subjectId: number = e.target.value;
        this.props.onFilterBySubject(subjectId);
    }

    private renderTableHeader() {
        return (
            <tr>
                <th>Image</th>
                <th>#</th>
                <th>BookUid</th>
                <th>Book Name</th>
                <th>Edition</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Publisher</th>
                <th>Year</th>
                <th>Subject</th>
            </tr>
        );
    }

    private renderTableBody() {
        return (
            this.props.books.map(book => (
                <tr>
                    <td>{this.getBookThumbnail(book)}</td>
                    <td>{book.id}</td>
                    <td>{book.bookUid}</td>
                    <td>{book.name}</td>
                    <td>{book.edition}</td>
                    <td>{book.authorFirstName}</td>
                    <td>{book.authorLastName}</td>
                    <td>{book.publisher}</td>
                    <td>{book.yearOfPublication}</td>
                    <td>{book.subject.description}</td>
                </tr>
            ))
        );
    }

    private getBookThumbnail(book: Book): any {
        const size: string = '150px';
        const thumbnail: any = this.bookSampler.getBookThumbnail(book);

        return <img src={thumbnail} className="App-logo" alt="logo" height={size}/>;
    }

}