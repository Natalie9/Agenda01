import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddTarefaPage } from '../add-tarefa/add-tarefa';
/**
 * Generated class for the EAD page.
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EAD');
  }
  adicionar(){

      this.navCtrl.push(AddTarefaPage);

  }
}
