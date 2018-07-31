export class Subject {
    id: number;
    subjectUid: string;
    description: string;

    constructor(id: number, subjectUid: string, description: string) {

        this.id = id;
        this.subjectUid = subjectUid;
        this.description = description;
    }
}