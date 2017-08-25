import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Atividades } from '../atividades/atividades';

/**
 * Generated class for the AdicionarAtividadesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-adicionar-atividades',
  templateUrl: 'adicionar-atividades.html',
})
export class AdicionarAtividadesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarAtividadesPage');
  }
  voltar(){

      this.navCtrl.push(Atividades);

  }

}
