import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provas } from '../provas/provas';

/**
 * Generated class for the AdicionarProvasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-adicionar-provas',
  templateUrl: 'adicionar-provas.html',
})
export class AdicionarProvasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarProvasPage');
  }
  voltar(){

      this.navCtrl.push(Provas);

  }
}
