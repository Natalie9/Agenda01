import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
import { Prova } from "../../providers/auth/prova";
import { addPase } from "../../providers/auth/addPASE";
/**
 * Generated class for the Sair page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  prova:Prova = new Prova();
  constructor(public navCtrl: NavController, public navParams: NavParams, public up :addPase ) {
    if (this.navParams.data.prova) {
      this.prova = this.navParams.data.prova

    }
  }
 
  save() {
    this.up.uploadAndSave(
     this.prova
    );
    this.navCtrl.pop();
  }

}


