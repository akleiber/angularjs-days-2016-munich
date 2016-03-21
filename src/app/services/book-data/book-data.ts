import {Injectable} from 'angular2/core';

export interface IBook {
  isbn: string;
  title: string;
  author: string;
}

@Injectable()
export class BookData {

  constructor() {}

  public getBooks(): IBook[] {
    return [
      { isbn: '‎978-3-16-148410-0', title: 'My title', author: 'Author'},
      { isbn: '‎978-3-16-148410-1', title: 'My title2', author: 'Author2'}
    ];
  }
}
