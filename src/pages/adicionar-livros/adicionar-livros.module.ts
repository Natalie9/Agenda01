import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarLivros } from './adicionar-livros';

@NgModule({
  declarations: [
    AdicionarLivros,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarLivros),
  ],
  exports: [
    AdicionarLivros
  ]
})
export class AdicionarLivrosModule {}
