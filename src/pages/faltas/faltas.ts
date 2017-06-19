import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the Faltas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-faltas',
  templateUrl: 'faltas.html',
})
export class Faltas {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // Doughnut
  public doughnutChartLabels:string[] = ['Faltas', 'Presenças', 'Aulas seguintes'];
  public doughnutChartData:number[] = [250, 550, 200];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Faltas');
  }

}
