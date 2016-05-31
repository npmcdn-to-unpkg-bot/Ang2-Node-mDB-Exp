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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = {
            content: 'Hello your string interperlation message is working',
            author: 'Max'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <input type=\"text\" [(ngModel)]=\"message.content\">\n            </section>\n        </div>\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">            \n                 <article class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        {{ message.content }}\n                    </div>\n                    <footer class=\"panel-footer\">\n                        <div class=\"author\">\n                        {{ message.author}}\n                        </div>              \n                        <div>\n                            <a href=\"#\">Edit</a>\n                            <a href=\"#\">Delete</a>\n                        </div>             \n                    </footer>\n                 </article>\n            </section>\n        </div>  \n       \n    ",
            styles: [" \n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQWlDMUM7SUFBQTtRQUNJLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxxREFBcUQ7WUFDOUQsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztJQUVOLENBQUM7SUFyQ0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDQ4QkF5QlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxTQUNSLENBQUM7U0FDTCxDQUFDOztvQkFBQTtJQU9GLG1CQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxvQkFBWSxlQU14QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibWVzc2FnZS5jb250ZW50XCI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS5hdXRob3J9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj4gIFxuICAgICAgIFxuICAgIGAsXG4gICAgc3R5bGVzOiBbYCBcbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgIGNvbnRlbnQ6ICdIZWxsbyB5b3VyIHN0cmluZyBpbnRlcnBlcmxhdGlvbiBtZXNzYWdlIGlzIHdvcmtpbmcnLFxuICAgICAgICBhdXRob3I6ICdNYXgnXG4gICAgfTtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
