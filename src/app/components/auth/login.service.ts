import { Injectable } from '@angular/core';
import {UserI} from '../../shared/models/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';


import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userData:Observable <firebase.User>;
  constructor(private afsAuth:AngularFireAuth) {
    this.userData = afsAuth.authState;
   }

  loginEmail(user:UserI){
    const {email, password} = user;
    return this.afsAuth.auth.signInWithEmailAndPassword(email,password)
    
  }

  logout(){
    this.afsAuth.auth.signOut();
  }
  
}
