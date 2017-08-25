import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarProvasPage } from './adicionar-provas';

@NgModule({
  declarations: [
    AdicionarProvasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarProvasPage),
  ],
  exports: [
    AdicionarProvasPage
  ]
})
export class AdicionarProvasPageModule {}
