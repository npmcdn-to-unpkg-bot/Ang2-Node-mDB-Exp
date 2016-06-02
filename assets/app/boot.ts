///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
import {MessageService} from "./messages/message.service";
import {ROUTER_PROVIDERS} from "@angular/router";

bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS]);