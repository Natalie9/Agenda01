import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Seminarios } from '../seminarios/seminarios';
/**
 * Generated class for the AddSeminariosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-seminarios',
  templateUrl: 'add-seminarios.html',
})
export class AddSeminariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSeminariosPage');
  }
  voltar(){

      this.navCtrl.push(Seminarios);

  }
}
