import {Component} from 'angular2/core';
import {BookData, IBook} from "../../services/book-data/book-data";
import {ROUTER_DIRECTIVES} from "angular2/router";


@Component({
    selector: 'book-index',
    templateUrl: 'app/components/book-index/book-index.html',
    styleUrls: ['app/components/book-index/book-index.css'],
    providers: [BookData],
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})

export class BookIndex {
    public books:IBook[];

    constructor(private bookData:BookData) {
        bookData.getBooks()
            .subscribe((books) => this.books = books);
    }
}
