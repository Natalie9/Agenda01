import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddTarefaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-tarefa',
  templateUrl: 'add-tarefa.html',
})
export class AddTarefaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTarefaPage');
  }
  voltar(){

      this.navCtrl.setRoot(HomePage);

  }
}
