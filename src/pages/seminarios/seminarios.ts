import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddTarefaPage } from '../add-tarefa/add-tarefa';
/**
 * Generated class for the Seminarios page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seminarios',
  templateUrl: 'seminarios.html',
})
export class Seminarios {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seminarios');
  }
  adicionar(){

      this.navCtrl.push(AddTarefaPage);

  }

}
