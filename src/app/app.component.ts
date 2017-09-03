import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { Calendario } from '../pages/calendario/calendario';
import { Faltas } from '../pages/faltas/faltas';
import { Livros } from '../pages/livros/livros';
import { Notas } from '../pages/notas/notas';
import { Sair } from '../pages/sair/sair';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomeServices } from "../providers/home-services/home-services";
import { FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any, icon: string}>;
  userget:FirebaseListObservable<any[]>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, afAuth: AngularFireAuth,private homeServices: HomeServices)  {

      const authObserver = afAuth.authState.subscribe(user => {

      if (user) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();


        this.userget = this.homeServices.getAll();
        this.userget.subscribe();
        console.log(this.userget);

      } else {
        this.rootPage = SigninPage;
        authObserver.unsubscribe();
      }
    });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home'  },
      { title: 'Calendário', component: Calendario, icon:'calendar' },
      { title: 'Faltas', component: Faltas, icon:'grid' },
      { title: 'Livros', component: Livros, icon:'book' },
      { title: 'Notas', component: Notas, icon:'calculator' },
      { title: 'Sair', component: Sair, icon:'exit' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component);
  }
}
