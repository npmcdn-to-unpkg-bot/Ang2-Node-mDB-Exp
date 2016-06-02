import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";

@Component({
    selector: 'my-signup',
    template: `
    <section class="col-md-8 col-md-offset-2">      
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()"> 
            <div class="form-group">
                <label for="firstName">First Name</label>               
                <input [ngFormControl]="myForm.find('firstName')" type="text" id="firstName" class="form-control">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input [ngFormControl]="myForm.find('lastName')" type="text" id="lastName" class="form-control">
            </div>
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
    // ngFormControl  lets the control know that this input belongs to control named firstName
    //tells angular 2 not to use default form use the overall form is bound to called myForm property
})
export class SignupComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private _fb:FormBuilder) {}

    onSubmit() {
        console.log(this.myForm.value)
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
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