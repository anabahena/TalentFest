import { Injectable } from '@angular/core';
import {UserI} from '../../shared/models/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, merge} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userData:Observable <firebase.User>;
  constructor(private afsAuth:AngularFireAuth, private afs:AngularFirestore) {
    this.userData = afsAuth.authState;
   }

  

  //  Inicio de sesión con email
  loginEmail(user:UserI){
    const {email, password} = user;
    return this.afsAuth.auth.signInWithEmailAndPassword(email,password)
    .then((credential) =>{
      this.rolUser(credential.user)
    })
    
  }

// Cerrar sesión
  logout(){
    this.afsAuth.auth.signOut();
  }


  private rolUser(user){
    const userRef:AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      roles:{
        // admin:false,
        marketing:true
      }
    }
    return userRef.set(data), {merge:true};
     
  }

  isAdmin(userUid){
    console.log(this.afs.doc<UserI>(`users/${userUid}`).valueChanges);
     
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth))
  }
  
}
