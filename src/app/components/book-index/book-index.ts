import {Component} from "angular2/core";
import {BookData} from "../../services/book-data/book-data";

@Component({
  selector: 'book-index',
  templateUrl: 'app/components/book-index/book-index.html',
  styleUrls: ['app/components/book-index/book-index.css'],
  providers: [BookData],
  directives: [],
  pipes: []
})
export class BookIndex {
  public books: any[];

  constructor(private bookData: BookData) {
    this.books = bookData.getBooks()
  }

}
