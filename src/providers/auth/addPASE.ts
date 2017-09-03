import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class addPase {

  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
    let path = '/users/' + this.angularFireAuth.auth.currentUser.uid+'/provas/';
    this.items = db.list(path);
    
  }

  public getAll() {
    return this.items;
  }

  public save(item: any):void {
    if (item.$key) {
       this.items.update(item.$key, { name: item.name });
    } else {
       this.db.object('/users/'+ this.angularFireAuth.auth.currentUser.uid + '/provas/'+ this.angularFireAuth.auth.currentUser.uid + item.atividade+item.descricao ).set(item);
    }
  }

  
  public remove(item: any) {
    
    console.log('rodando');
    return this.items.remove(item.$key);
   // return this.db.object('/users/'+ this.angularFireAuth.auth.currentUser.uid + '/provas/'+ this.angularFireAuth.auth.currentUser.uid + item.atividade+item.descricao).remove;
  }

  
  public uploadAndSave(item: any) {
    if (item.$key) {
      return this.items.update(item.$key, item);
    } 

  }
}