import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BooksIndex} from "./components/books-index/books-index";


@Component({
  selector: 'workshop-app',
  providers: [],
  templateUrl: 'app/workshop.html',
  directives: [ROUTER_DIRECTIVES, BooksIndex],
  pipes: []
})
@RouteConfig([

])
export class WorkshopApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
