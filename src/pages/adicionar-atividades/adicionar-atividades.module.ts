import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarAtividadesPage } from './adicionar-atividades';

@NgModule({
  declarations: [
    AdicionarAtividadesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarAtividadesPage),
  ],
  exports: [
    AdicionarAtividadesPage
  ]
})
export class AdicionarAtividadesPageModule {}
