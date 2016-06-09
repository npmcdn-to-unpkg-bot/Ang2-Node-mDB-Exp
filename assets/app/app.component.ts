import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";

import {HeaderComponent} from "./header.component";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {ErrorComponent} from "./error/error.component";

@Component({
    selector: 'my-app',
    template: ` 
        <div>
            <my-header>
                    
            </my-header>
            <router-outlet>
            
            </router-outlet>
        </div>
        <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})

//noinspection TypeScriptValidateTypes
@Routes([
    {path: '/', component: MessagesComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {
    
}   