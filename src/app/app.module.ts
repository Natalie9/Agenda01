import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Calendario } from '../pages/calendario/calendario';
import { Faltas } from '../pages/faltas/faltas';
import { Livros } from '../pages/livros/livros';
import { Notas } from '../pages/notas/notas';
import { Atividades } from '../pages/atividades/atividades';
import { Provas } from '../pages/provas/provas';
import { EAD } from '../pages/ead/ead';
import { Seminarios } from '../pages/seminarios/seminarios';
import { NgCalendarModule  } from 'ionic2-calendar';
import { SigninPage } from '../pages/signin/signin';
import { SigninWithEmailPage } from '../pages/signinwithemail/signinwithemail';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { Sair } from '../pages/sair/sair';
import { AuthService } from '../providers/auth/auth-service';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { AdicionarLivros } from '../pages/adicionar-livros/adicionar-livros';
import { AdicionarAtividadesPage } from '../pages/adicionar-atividades/adicionar-atividades';
import { AddTarefaPage } from '../pages/add-tarefa/add-tarefa';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { HomeServices } from "../providers/home-services/home-services";
import { AngularFireDatabaseModule } from 'angularfire2/database';




const firebaseConfig = {
  apiKey: "AIzaSyDvgakcajCrhkcnLKLlFFaYh87dHa1CodI",
authDomain: "agenda01-2e5e2.firebaseapp.com",
databaseURL: "https://agenda01-2e5e2.firebaseio.com",
projectId: "agenda01-2e5e2",
storageBucket: "",
messagingSenderId: "162395344261"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Calendario,
    Faltas,
    Livros,
    Notas,
    Atividades,
    Provas,
    EAD,
    Seminarios,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
    Sair,
    AdicionarLivros,
    AdicionarAtividadesPage,
    AddTarefaPage

  ],


// In your App's module:

  imports: [
  NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ChartsModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Calendario,
    Faltas,
    Livros,
    Notas,
    Atividades,
    Provas,
    EAD,
    Seminarios,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
    Sair,
    AdicionarLivros,
    AdicionarAtividadesPage,
    AddTarefaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    GooglePlus,
    Facebook,
    HomeServices
  ]
})
export class AppModule {


}
