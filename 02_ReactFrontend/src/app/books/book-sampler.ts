import * as Business from './img/Business.png';
import * as Economic from './img/Economic.jpg';
import * as learningSpringBoot1 from './img/learningSpringBoot1.jpg';
import * as learningSpringBoot2 from './img/learningSpringBoot2.jpg';
import * as masteringSpringBoot from './img/masteringSpringBoot.jpg';
import * as essentials from './img/essentials.jpg';
import * as masteringReact from './img/masteringReact2016.jpg';
import * as fullstackReact from './img/fullstackReact2017.jpg';
import * as learningReact from './img/learningReact2017.jpg';
import * as learningReactNative from './img/learningReactNative.png';
import * as reactUp from './img/reactUp.png';
import * as headFirstJava from './img/headFirstJava.jpg';
import * as headFirstDesign from './img/headFirstDesign.jpg';
import * as effectiveJava from './img/effectiveJava.jpg';
import * as learningJava from './img/learningJava.jpg';
import * as library from '../library.png';
import * as leadership from './img/leadership.jpg';
import * as marketing from './img/marketing.jpg';
import * as mindset from './img/mindset.jpg';
import { Book } from './model/Book';

export class BookSampler {

    bookSampleMap: Map<string, any>;

    constructor() {
        this.bookSampleMap = new Map<string, any>();
        this.bookSampleMap.set('Springer001', essentials);
        this.bookSampleMap.set('Busi001', Business);
        this.bookSampleMap.set('Eco001', Economic);
        this.bookSampleMap.set('Packt001', learningSpringBoot1);
        this.bookSampleMap.set('Packt002', learningSpringBoot2);
        this.bookSampleMap.set('Packt003', masteringSpringBoot);
        this.bookSampleMap.set('Packt004', masteringReact);
        this.bookSampleMap.set('Packt005', fullstackReact);
        this.bookSampleMap.set('Packt006', learningReact);
        this.bookSampleMap.set('Packt007', learningReactNative);
        this.bookSampleMap.set('Packt008', reactUp);
        this.bookSampleMap.set('Packt009', headFirstJava);
        this.bookSampleMap.set('Packt010', headFirstDesign);
        this.bookSampleMap.set('Packt011', effectiveJava);
        this.bookSampleMap.set('Packt012', learningJava);
    }

    getBookThumbnail(book: Book): any {
        let thumbnail: any = this.bookSampleMap.get(book.bookUid);

        if (thumbnail !== undefined) {
            return thumbnail;
        }

        return this.getBookDummyThumbnail(book.id);
    }

    private getBookDummyThumbnail(id: number) {
        const dummyLoadedImages: number = 4;

        if (id % dummyLoadedImages === 0) {
            return leadership;
        } else if (id % dummyLoadedImages === 1) {
            return marketing;
        } else if (id % dummyLoadedImages === 2) {
            return mindset;
        } else if (id % dummyLoadedImages === 3) {
            return library;
        } else {
            return leadership;
        }
    }

}