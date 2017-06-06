import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EAD } from './ead';

@NgModule({
  declarations: [
    EAD,
  ],
  imports: [
    IonicPageModule.forChild(EAD),
  ],
  exports: [
    EAD
  ]
})
export class EADModule {}
