import { Injectable } from '@angular/core';
import {UserI} from '../../shared/models/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/switchMap';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userData: Observable <firebase.User>;
  
  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userData = afsAuth.authState;
   }



  //  Inicio de sesión con email
  loginEmail(user: UserI){
    const {email, password} = user;
    return this.afsAuth.auth.signInWithEmailAndPassword(email, password)
    .then( res =>{
      console.log('usuario logeado', res);
      
    })
    .catch(err =>{
      console.log('inicio de sesión no realizado', err);
      
    })

  }

// Cerrar sesión
  logout() {
    this.afsAuth.auth.signOut();
  }

// Función para detectar si es usuario
  isAdmin(userUid){
    return this.afs.doc<UserI>(`users/${userUid}`).valueChanges;
  }


// Autenticación
//   isAuth(){
//     return this.afsAuth.authState.pipe(map(auth => auth));
//   }

//   private updateUserData(user){
//     const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
//     const data: UserI = {
//       // uid: user.uid,
//       email: user.email,
//       password: user.password,
//       // roles: {
//       //   cobranza: true
//       // }
//     };
//     return userRef.set(data, {merge: true});
    
//   }
}
