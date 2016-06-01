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
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "                  \n                 <article class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        {{ message.content }}\n                    </div>\n                    <footer class=\"panel-footer\">\n                        <div class=\"author\">\n                        {{ message.username}}\n                        </div>              \n                        <div>\n                            <a href=\"#\">Edit</a>\n                            <a href=\"#\">Delete</a>\n                        </div>             \n                    </footer>\n                 </article>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUEsQ0FBQyxvRUFBb0U7QUFDdEgsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBcUJsQztJQUFBO0lBRUEsQ0FBQztJQURHO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQXJCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsbW9CQWVUO1NBQ0osQ0FBQzs7d0JBQUE7SUFJRix1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyAvL3lvdSBpbXBvcnQgdGhpcyBpbiBvcmRlciB0byB1c2UgdGhlIEBjb21wb25lbnQgZGVjb3JhdG9yIG9uIGxpbmUgM1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlOiBgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50IH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLnVzZXJuYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
