///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
import {MessageService} from "./messages/message.service";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provide} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";


bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);

//provide with LocationStrategy tells Angular2 we don't want to use default HTML5 strategy of using normal routes