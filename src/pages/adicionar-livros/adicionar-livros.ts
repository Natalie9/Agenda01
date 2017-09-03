import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livros } from '../livros/livros';
import { addPase } from "../../providers/auth/addPASE";
import { Livro } from "../../providers/auth/livro";
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
  livro: Livro = new Livro();
  constructor(public navCtrl: NavController, public navParams: NavParams, public addl:addPase) {
  if(this.navParams.data.livro){
    this.livro = this.navParams.data.livro
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarLivros');
  }
  add(){

    if(this.navParams.data.livro){
    this.addl.uploadAndSavelivro(this.livro);
    }else{
     this.addl.saveLivro(this.livro);
    }
     this.navCtrl.setRoot(Livros);

  }

}
