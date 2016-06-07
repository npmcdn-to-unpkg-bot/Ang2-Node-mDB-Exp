import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import {User} from "./user";

@Injectable()
export class AuthService {
//add constructor to inject angular2 http service
    constructor (private _http: Http) {}

    signup(user: User) {
        console.log('angular auth.service sending sign-up req')
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/user', body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}