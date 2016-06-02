import {Component} from "@angular/core";
import {MessageInputComponent} from "./message-input.component";
import {MessageListComponent} from "./message-list.component";
@Component({
    selector: 'my-messages',
    template: `
        <div class="row">
            <my-message-input></my-message-input>            
        </div>
        <div class="row">
            <my-message-list></my-message-list>
        </div>  
    `,
    directives: [MessageListComponent, MessageInputComponent]
})
export class MessagesComponent {

}