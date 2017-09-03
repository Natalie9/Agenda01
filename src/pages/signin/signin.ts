import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { SignupPage } from '../signup/signup';
import { SigninWithEmailPage } from '../signinwithemail/signinwithemail';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  signInWithEmailPage() {
    this.navCtrl.push(SigninWithEmailPage);
  }

  
}
