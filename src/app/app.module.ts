import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Agenda } from '../pages/agenda/agenda';
import { Calendario } from '../pages/calendario/calendario';
import { Faltas } from '../pages/faltas/faltas';
import { Livros } from '../pages/livros/livros';
import { Notas } from '../pages/notas/notas';
import { Atividades } from '../pages/atividades/atividades';
import { Provas } from '../pages/provas/provas';
import { EAD } from '../pages/ead/ead';
import { Seminarios } from '../pages/seminarios/seminarios';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Agenda,
    Calendario,
    Faltas,
    Livros,
    Notas,
    Atividades,
    Provas,
    EAD,
    Seminarios
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Agenda,
    Calendario,
    Faltas,
    Livros,
    Notas,
    Atividades,
    Provas,
    EAD,
    Seminarios
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
