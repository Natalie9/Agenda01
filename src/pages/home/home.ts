import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Atividades } from '../atividades/atividades';
import { Seminarios } from '../seminarios/seminarios';
import { EAD } from '../ead/ead';
import { Provas } from '../provas/provas';
import { FirebaseListObservable } from "angularfire2/database";
import { addPase } from "../../providers/auth/addPASE";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:FirebaseListObservable<any[]>;

    constructor(private navCtrl: NavController, public consultar :addPase) {
      this.items = this.consultar.getAll();
      console.log(this.items);
  
  
    }


  ati(){
    this.navCtrl.push(Atividades);
  }
  pro(){
    this.navCtrl.push(Provas);
  }
  ead(){
    this.navCtrl.push(EAD);
  }
  sem(){
    this.navCtrl.push(Seminarios);
  }


}
