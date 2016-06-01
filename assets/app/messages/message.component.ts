import { Component, Input } from '@angular/core'; //you import this in order to use the @component decorator on line 3
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
                            <a href="#">Edit</a>
                            <a href="#">Delete</a>
                        </div>             
                    </footer>
                 </article>
    `
})

export class MessageComponent {
    @Input() message: Message;
}