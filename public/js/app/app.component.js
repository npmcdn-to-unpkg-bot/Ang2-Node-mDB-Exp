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
var router_1 = require("@angular/router");
var header_component_1 = require("./header.component");
var messages_component_1 = require("./messages/messages.component");
var authentication_component_1 = require("./auth/authentication.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div>\n            <my-header>\n                    \n            </my-header>\n            <router-outlet>\n            \n            </router-outlet>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
        }),
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUUxRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxtQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQUNoRSx5Q0FBc0MsaUNBQWlDLENBQUMsQ0FBQTtBQXNCeEU7SUFBQTtJQUVBLENBQUM7SUF0QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDBMQVNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUMsa0NBQWUsQ0FBQztTQUNsRCxDQUFDO1FBR0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1NBQ3RELENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxteS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9teS1oZWFkZXI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxIZWFkZXJDb21wb25lbnRdXG59KVxuXG4vL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvJywgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvYXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG59ICAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
