import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarLivros } from '../adicionar-livros/adicionar-livros';
import { addPase } from "../../providers/auth/addPASE";
import { FirebaseListObservable } from "angularfire2/database";
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
  
  items:FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public consultar:addPase) {
    this.items = this.consultar.getAlllivro();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Livros');
  }


  add(){

      this.navCtrl.push(AdicionarLivros);

  }
  removeItem(item:any){
    this.consultar.removelivro(item);
  }

  editItem(item:any){
    this.navCtrl.push(AdicionarLivros,{livro:item});
  }
}
