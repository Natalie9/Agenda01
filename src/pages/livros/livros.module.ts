import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Livros } from './livros';

@NgModule({
  declarations: [
    Livros,
  ],
  imports: [
    IonicPageModule.forChild(Livros),
  ],
  exports: [
    Livros
  ]
})
export class LivrosModule {}
