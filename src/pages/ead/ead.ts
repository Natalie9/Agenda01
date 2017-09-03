import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddTarefaPage } from '../add-tarefa/add-tarefa';
import { FirebaseListObservable } from "angularfire2/database";
import { addPase } from "../../providers/auth/addPASE";
import { EditarPage } from "../editar/editar";

/**
 * Generated class for the Provas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ead',
  templateUrl: 'ead.html',
})
export class EAD {
      items:FirebaseListObservable<any[]>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public consultar :addPase) {
    this.items = this.consultar.getAll();
    console.log(this.items);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Atividades');
  }
  adicionar(){

      this.navCtrl.push(AddTarefaPage);

  }
  removeItem(item:any){
    this.consultar.remove(item);
  }

  editItem(item:any){
    this.navCtrl.push(EditarPage,{prova:item});
  }
}
