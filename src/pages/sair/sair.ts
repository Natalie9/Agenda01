import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the Sair page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sair',
  templateUrl: 'sair.html',
})
export class Sair {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {

  this.authService.signOut()
    .then(() => {
      this.navCtrl.setRoot(SigninPage);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Sair');
  }

}
