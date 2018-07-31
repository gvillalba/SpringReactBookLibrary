import { Subject } from './Subject';

export class Book {
    id: number;
    name: string;
    authorFirstName: string;
    authorLastName: string;
    yearOfPublication: number;
    publisher: string;
    bookUid: string;
    subject: Subject;
    edition: string;

    constructor(id: number, name: string, authorFirstName: string, authorLastName: string, yearOfPublication: number,
                publisher: string, bookUid: string, subject: Subject) {

        this.id = id;
        this.name = name;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.yearOfPublication = yearOfPublication;
        this.publisher = publisher;
        this.bookUid = bookUid;
        this.subject = subject;
    }
}