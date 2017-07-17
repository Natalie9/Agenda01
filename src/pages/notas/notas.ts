import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Notas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class Notas {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public doughnutChartLabels:string[] = [ 'Notas', 'Professor ainda não postou'];
  public doughnutChartData:number[] = [ 550, 450];
  public doughnutChartType:string = 'doughnut';

  public doughnutChartLabels2:string[] = [ 'Perigo',  'Já consegui', 'Professor ainda não postou'];
  public doughnutChartData2:number[] = [ 250, 250, 500];
  public doughnutChartType2:string = 'doughnut';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Notas');
  }

}
