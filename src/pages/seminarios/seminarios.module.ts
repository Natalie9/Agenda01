import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seminarios } from './seminarios';

@NgModule({
  declarations: [
    Seminarios,
  ],
  imports: [
    IonicPageModule.forChild(Seminarios),
  ],
  exports: [
    Seminarios
  ]
})
export class SeminariosModule {}
