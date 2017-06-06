import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Provas } from './provas';

@NgModule({
  declarations: [
    Provas,
  ],
  imports: [
    IonicPageModule.forChild(Provas),
  ],
  exports: [
    Provas
  ]
})
export class ProvasModule {}
