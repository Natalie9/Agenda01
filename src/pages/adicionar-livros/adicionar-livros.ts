import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livros } from '../livros/livros';
/**
 * Generated class for the AdicionarLivros page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-adicionar-livros',
  templateUrl: 'adicionar-livros.html',
})
export class AdicionarLivros {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarLivros');
  }
  voltar(){

      this.navCtrl.push(Livros);

  }

}
