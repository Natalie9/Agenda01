import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from "../../providers/auth/user";
import { Prova } from "../../providers/auth/prova";
import { addPase } from "../../providers/auth/addPASE";
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
  
    prova:Prova = new Prova();
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private add :addPase) {

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTarefaPage');
  }
  voltar(){

    this.add.save(this.prova);
      this.navCtrl.setRoot(HomePage);

  
    }

   
  }
