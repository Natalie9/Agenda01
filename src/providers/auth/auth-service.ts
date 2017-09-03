import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import fb from 'firebase';
import { AngularFireDatabase } from "angularfire2/database";
@Injectable()
export class AuthService {

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private googlePlus: GooglePlus, private facebook: Facebook) { }

  createUser(user: User) {

    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

  }
  registerUser(userId: string, user: User){

    return  this.db.object(`/users/${userId}`)
     .set(user)
}

  
  signIn(user: User) {

    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signInWithGoogle() {
    return this.googlePlus.login({
      'webClientId': '162395344261-4bnrcu05tn2452hdr5rj94rk99ksql87.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then((user: firebase.User) => {
            // atualizando o profile do usuario
            return user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
          });
      });
  }

  signInWithFacebook() {
    return this.facebook.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        //https://developers.facebook.com/docs/graph-api/reference/user
        //Ao logar com o facebook o profile do usuario é automaticamente atualizado.
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
      });
  }

  signOut() {
    if (this.angularFireAuth.auth.currentUser.providerData.length) {
      for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
        var provider = this.angularFireAuth.auth.currentUser.providerData[i];

        if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) { // Se for o gooogle
          // o disconnect limpa o oAuth token e tambem esquece qual conta foi selecionada para o login
          return this.googlePlus.disconnect()
            .then(() => {
              return this.signOutFirebase();
            });
        } else if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) { // Se for facebook
          return this.facebook.logout()
            .then(() => {
              return this.signOutFirebase();
            })
        }
      }
    }

    return this.signOutFirebase();
  }

  private signOutFirebase() {
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }
}
