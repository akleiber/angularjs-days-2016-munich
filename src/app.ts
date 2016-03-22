import {bootstrap} from "angular2/platform/browser";
import {WorkshopApp} from "./app/workshop";
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from "angular2/router";
import {provide} from "angular2/core";

bootstrap(WorkshopApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {
    useClass: PathLocationStrategy
  })
]);
