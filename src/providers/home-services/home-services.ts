import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase/app'
import fb from 'firebase';


@Injectable()
export class HomeServices {

    items: FirebaseListObservable<any>;

    constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
      angularFireAuth.authState.subscribe(user => {
        if (user) {
          //let path =  '/users/' + this.angularFireAuth.auth.currentUser.uid;
       this.items = this.db.list('/users/' + this.angularFireAuth.auth.currentUser.uid);
          

      // this.items =db.list(fb.database().ref('users/'+this.angularFireAuth.auth.currentUser.uid).path);
      }
        });
      }

      public getAll() {
        return this.items;
      }
}
