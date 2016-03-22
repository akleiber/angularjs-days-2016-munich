import {Component, OnInit} from 'angular2/core';
import {BookData, IBook} from "../../services/book-data/book-data";
import {RouteParams} from "angular2/router";


@Component({
  selector: 'book-show',
  templateUrl: 'app/components/book-show/book-show.html',
  styleUrls: ['app/components/book-show/book-show.css'],
  providers: [BookData],
  directives: [],
  pipes: []
})
export class BookShow implements OnInit{
  private book:IBook;
  private bookDataObs;

  ngOnInit() {
    this.bookDataObs.subscribe(book => this.book = book);
  }

  constructor(private bookData: BookData, private routeParams: RouteParams) {
    this.bookDataObs = bookData.getByIsbn(routeParams.get('isbn'));
  }

}
