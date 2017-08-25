import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSeminariosPage } from './add-seminarios';

@NgModule({
  declarations: [
    AddSeminariosPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSeminariosPage),
  ],
  exports: [
    AddSeminariosPage
  ]
})
export class AddSeminariosPageModule {}
