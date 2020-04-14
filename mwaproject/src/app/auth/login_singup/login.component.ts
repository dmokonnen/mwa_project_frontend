import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({

    templateUrl: './login.component.html',
    styleUrls: [ '../../../css/color.css',
    '../../../css/responsive.css', '../../../css/style.css',
    '../../../css/strip.css']
})
export class LoginComponent{

    constructor(private authService: AuthService){}
    onLogin(loginForm: NgForm){

        if (loginForm.invalid) {
            return;
        }

        this.authService.login(loginForm.value.userName, loginForm.value.password);
    }

    onSignup(signupForm: NgForm){

        if (signupForm.invalid) {
            return;
        }

        this.authService.createUser(signupForm.value);
    }

    forgotPassword(passForgotForm: NgForm){

        if (passForgotForm.invalid) {
            return;
        }
        event.preventDefault(); // Prevents browser following the link
        this.authService.OnForgotPassword(passForgotForm.value.email);
    }

}
