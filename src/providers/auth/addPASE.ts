import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class addPase {

  items: FirebaseListObservable<any[]>;
  itemslivro: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
    let path = '/users/' + this.angularFireAuth.auth.currentUser.uid+'/provas/';
    this.items = db.list(path);
    let pathlivros = '/users/' + this.angularFireAuth.auth.currentUser.uid+'/livros/';
    this.itemslivro = db.list(pathlivros);
    
  }

  public getAll() {
    return this.items;
  }

  public getAlllivro() {
    return this.itemslivro;
  }

  public save(item: any):void {
    if (item.$key) {
       this.items.update(item.$key, { name: item.name });
    } else {
       this.db.object('/users/'+ this.angularFireAuth.auth.currentUser.uid + '/provas/'+ this.angularFireAuth.auth.currentUser.uid + item.nome+item.entrega ).set(item);
    }
  }

  
  public remove(item: any) {
    
    console.log('rodando');
    return this.items.remove(item.$key);
   // return this.db.object('/users/'+ this.angularFireAuth.auth.currentUser.uid + '/provas/'+ this.angularFireAuth.auth.currentUser.uid + item.atividade+item.descricao).remove;
  }

  public removelivro(item: any) {
    
    return this.itemslivro.remove(item.$key);
   // return this.db.object('/users/'+ this.angularFireAuth.auth.currentUser.uid + '/provas/'+ this.angularFireAuth.auth.currentUser.uid + item.atividade+item.descricao).remove;
  }

  public uploadAndSavelivro(item: any) {
    if (item.$key) {
      return this.itemslivro.update(item.$key, item);
    } 

  }
  
  public uploadAndSave(item: any) {
    if (item.$key) {
      return this.items.update(item.$key, item);
    } 

  }

  public saveLivro(item: any):void {
    
    this.db.object('/users/'+ this.angularFireAuth.auth.currentUser.uid + '/livros/'+ this.angularFireAuth.auth.currentUser.uid + item.nome+item.entrega ).set(item);
    
  }
}