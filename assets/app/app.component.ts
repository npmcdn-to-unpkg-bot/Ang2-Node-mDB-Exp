import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <input type="text" [(ngModel)]="message.content">
            </section>
        </div>
        <div class="row">
            <section class="col-md-8 col-md-offset-2">            
                 <article class="panel panel-default">
                    <div class="panel-body">
                        {{ message.content }}
                    </div>
                    <footer class="panel-footer">
                        <div class="author">
                        {{ message.author}}
                        </div>              
                        <div>
                            <a href="#">Edit</a>
                            <a href="#">Delete</a>
                        </div>             
                    </footer>
                 </article>
            </section>
        </div>  
       
    `,
    styles: [` 
    `]
})
export class AppComponent {
    message = {
        content: 'Hello your string interperlation message is working',
        author: 'Max'
    };

}