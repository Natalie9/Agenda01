import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Faltas } from './faltas';

@NgModule({
  declarations: [
    Faltas,
  ],
  imports: [
    IonicPageModule.forChild(Faltas),
  ],
  exports: [
    Faltas
  ]
})
export class FaltasModule {}
