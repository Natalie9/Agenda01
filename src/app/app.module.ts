import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';

const firebaseConfig = {
      apiKey: "AIzaSyAYqpBZaOg6eAd0xDyFj9VviAi2f3w99z4",
   authDomain: "agenda01-10aa5.firebaseapp.com",
   databaseURL: "https://agenda01-10aa5.firebaseio.com",
   projectId: "agenda01-10aa5",
   storageBucket: "agenda01-10aa5.appspot.com",
   messagingSenderId: "536216500547"
};
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
    Seminarios,

    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
    Sair,
    AdicionarLivros

  ],


// In your App's module:

  imports: [
  NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ChartsModule

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
    Seminarios,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
    Sair,
    AdicionarLivros
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    GooglePlus,
    Facebook
  ]
})
export class AppModule {

}
