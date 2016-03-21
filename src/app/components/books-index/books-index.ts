import {Component} from 'angular2/core';
import {BookData, IBook} from "../../services/book-data/book-data";


@Component({
  selector: 'books-index',
  templateUrl: 'app/components/books-index/books-index.html',
  styleUrls: ['app/components/books-index/books-index.css'],
  providers: [BookData],
  directives: [],
  pipes: []
})
export class BooksIndex {
  public books: IBook[];

  constructor(private bookData: BookData) {
    this.books = bookData.getBooks();
  }
}
