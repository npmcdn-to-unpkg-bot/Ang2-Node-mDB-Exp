import { Component, Input, Output, EventEmitter } from '@angular/core'; //you import this in order to use the @component decorator on line 3
import {Message} from "./message";
import {MessageService} from "./message.service";


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
                        <div class="config" *ngIf="belongsToUser()">
                            <a (click)="onEdit()">Edit</a> <!--event listener-->
                            <a (click)="onDelete()">Delete</a>
                        </div>             
                    </footer>
                 </article>
    `
})



export class MessageComponent {
    @Input() message: Message;
    //Output declares an event-bound output property
    @Output() editClicked = new EventEmitter<string>(); //catches events in Angular2
    constructor (private _messageService: MessageService) {}
    onEdit() {
       this._messageService.editMessage(this.message);
    }
    onDelete() {
        this._messageService.deleteMessage(this.message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            )
    }
    belongsToUser() {
        return localStorage.getItem('userId')  == this.message.userId;
    }

}