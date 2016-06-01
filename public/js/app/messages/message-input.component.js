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
var core_1 = require("@angular/core");
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageInputComponent.prototype.onCreate = function (content) {
        var message = new message_1.Message(content, null, 'Dummy');
        this._messageService.addMessage(message);
    };
    ;
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <div class=\"form-group\">\n                <label for=\"content\">Content</label>\n                <input type=\"text\" class=\"form-control\" id=\"content\" #input>\n            </div>\n            <button  type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send Message</button>\n        </section>\n    ",
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBZWpEO0lBQ0ksK0JBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFHLENBQUM7SUFDdkQsd0NBQVEsR0FBUixVQUFTLE9BQWU7UUFDcEIsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7SUFsQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsa1pBUVQ7U0FDSixDQUFDOzs2QkFBQTtJQVFGLDRCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw2QkFBcUIsd0JBTWpDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ3JlYXRlKGlucHV0LnZhbHVlKVwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cbiAgICBvbkNyZWF0ZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGNvbnRlbnQsIG51bGwsICdEdW1teScpO1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
