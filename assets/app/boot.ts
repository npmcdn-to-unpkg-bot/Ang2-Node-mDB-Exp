///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
import {MessageService} from "./messages/message.service";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provide} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorService} from "./error/error.service";


bootstrap(AppComponent, [MessageService, AuthService, ErrorService, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy }), HTTP_PROVIDERS]);

//provide with LocationStrategy tells Angular2 we don't want to use default HTML5 strategy of using normal routes