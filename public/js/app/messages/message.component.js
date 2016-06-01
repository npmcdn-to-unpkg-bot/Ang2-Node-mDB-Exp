"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //you import this in order to use the @component decorator on line 3
var message_1 = require("./message");
var MessageComponent = (function () {
    function MessageComponent() {
        //Output declares an event-bound output property
        this.editClicked = new core_1.EventEmitter(); //catches events in Angular2
    }
    MessageComponent.prototype.onClick = function () {
        this.editClicked.emit('Changed');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "                  \n                 <article class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        {{ message.content }}\n                    </div>\n                    <footer class=\"panel-footer\">\n                        <div class=\"author\">\n                        {{ message.username}}\n                        </div>              \n                        <div>\n                            <a href=\"#\" (click)=\"onClick()\">Edit</a> <!--event listener-->\n                            <a href=\"#\">Delete</a>\n                        </div>             \n                    </footer>\n                 </article>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUEsQ0FBQyxvRUFBb0U7QUFDNUksd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBdUJsQztJQUFBO1FBRUksZ0RBQWdEO1FBQ3RDLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUMsQ0FBQyw0QkFBNEI7SUFLcEYsQ0FBQztJQUhHLGtDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBTkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBdkJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSwrcUJBZVQ7U0FDSixDQUFDOzt3QkFBQTtJQVVGLHVCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSx3QkFBZ0IsbUJBUTVCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyAvL3lvdSBpbXBvcnQgdGhpcyBpbiBvcmRlciB0byB1c2UgdGhlIEBjb21wb25lbnQgZGVjb3JhdG9yIG9uIGxpbmUgM1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgICB0ZW1wbGF0ZTogYCAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkNsaWNrKClcIj5FZGl0PC9hPiA8IS0tZXZlbnQgbGlzdGVuZXItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcbiAgICAvL091dHB1dCBkZWNsYXJlcyBhbiBldmVudC1ib3VuZCBvdXRwdXQgcHJvcGVydHlcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTsgLy9jYXRjaGVzIGV2ZW50cyBpbiBBbmd1bGFyMlxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KCdDaGFuZ2VkJyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
