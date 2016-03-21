import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IBook {
    isbn: string;
    title: string;
    author: string;
}

@Injectable()
export class BookData {

    constructor(private http:Http) {
    }

    public getBooks():Observable<IBook[]> {
        return this.http.get('http://localhost:4730/books')
            .map(response => response.json())
    }
}
