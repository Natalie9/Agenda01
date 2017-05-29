import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Calendario } from './calendario';

@NgModule({
  declarations: [
    Calendario,
  ],
  imports: [
    IonicPageModule.forChild(Calendario),
  ],
  exports: [
    Calendario
  ]
})
export class CalendarioModule {}
