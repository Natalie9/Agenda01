import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Atividades } from '../atividades/atividades';
import { Seminarios } from '../seminarios/seminarios';
import { EAD } from '../ead/ead';
import { Provas } from '../provas/provas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ) {


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
