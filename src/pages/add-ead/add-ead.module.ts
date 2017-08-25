import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEadPage } from './add-ead';

@NgModule({
  declarations: [
    AddEadPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEadPage),
  ],
  exports: [
    AddEadPage
  ]
})
export class AddEadPageModule {}
