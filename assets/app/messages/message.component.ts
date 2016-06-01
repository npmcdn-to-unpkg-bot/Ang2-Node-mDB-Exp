import { Component, Input, Output, EventEmitter } from '@angular/core'; //you import this in order to use the @component decorator on line 3
import {Message} from "./message";


@Component({
    selector: 'my-message',
    template: `                  
                 <article class="panel panel-default">
                    <div class="panel-body">
                        {{ message.content }}
                    </div>
                    <footer class="panel-footer">
                        <div class="author">
                        {{ message.username}}
                        </div>              
                        <div>
                            <a href="#" (click)="onClick()">Edit</a> <!--event listener-->
                            <a href="#">Delete</a>
                        </div>             
                    </footer>
                 </article>
    `
})

export class MessageComponent {
    @Input() message: Message;
    //Output declares an event-bound output property
    @Output() editClicked = new EventEmitter<string>(); //catches events in Angular2

    onClick() {
        this.editClicked.emit('Changed');
    }
}