import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {BookIndex} from "./components/book-index/book-index";
import {BookShow} from "./components/book-show/book-show";


@Component({
  selector: 'workshop-app',
  providers: [
    HTTP_PROVIDERS
  ],
  templateUrl: 'app/workshop.html',
  directives: [ROUTER_DIRECTIVES, BookIndex],
  pipes: []
})

@RouteConfig([
  { path: '/books',
    component: BookIndex,
    as: 'Books'
  },
  {
    path: '/books/:isbn',
    component: BookShow,
    as: 'BookShow'
  }
])

export class WorkshopApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
