import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarLivros } from '../adicionar-livros/adicionar-livros';
/**
 * Generated class for the Livros page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class Livros {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Livros');
  }


  adicionar(){

      this.navCtrl.push(AdicionarLivros);

  }

}
