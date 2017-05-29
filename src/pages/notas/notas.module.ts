import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Notas } from './notas';

@NgModule({
  declarations: [
    Notas,
  ],
  imports: [
    IonicPageModule.forChild(Notas),
  ],
  exports: [
    Notas
  ]
})
export class NotasModule {}
