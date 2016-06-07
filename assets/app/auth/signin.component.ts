import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";
import {Router} from "@angular/router";

import {User} from "./user";
import {AuthService} from "./auth.service";

@Component({
    selector: 'my-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">      
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">           
            <div class="form-group">
                <label for="email">Mail</label>
                <input [ngFormControl]="myForm.find('email')" type="text" id="email" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.find('password')" type="text" id="password" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign In</button>
        </form>
    </section>
    `
})
export class SigninComponent {
    myForm: ControlGroup;

    constructor(private _fb:FormBuilder, private _authService: AuthService, private _router: Router) {}

    onSubmit() {
        console.log(this.myForm.value)
        //creates a const to store the email and password that user entered
        const user = new User(this.myForm.value.email, this.myForm.value.password)
        //insert that user const into the authService that will handle signin
        this._authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._router.navigateByUrl('/')
                },
                error => console.error(error)
            )
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            email: ['', Validators.compose([
                this.isEmail,
                Validators.required
            ])], //compose allows you to pass multiple validators in an array
            password: ['', Validators.required]
        })
    }

    private isEmail(control: Control): {[s: string]: boolean} {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            return {invalidMail: true};
        }
    }
}