import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";

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
            <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
        </form>
    </section>
    `
})
export class SigninComponent {
    myForm: ControlGroup;

    constructor(private _fb:FormBuilder) {}

    onSubmit() {
        console.log(this.myForm.value)
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