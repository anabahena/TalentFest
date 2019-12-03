import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../login.service';
import { UserI} from '../../../shared/models/user.interface'
import { User } from 'firebase';
import { Live } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup ({
    email: new FormControl('', Validators.required),
    password: new FormControl ('', Validators.required)
  })

  constructor(private loginSvc:LoginService, private route: Router) { }

  ngOnInit() {
  }

  onLogin(form:UserI){
    this.loginSvc
    .loginEmail(form)
    .then(res =>{
      alert('Inicio de sesión exitoso');
      this.route.navigate(['/clients']);
      
    })
    .catch(err =>{
      // alert('No has ingresado la información correcta');
      this.route.navigate(['/login'])
    })
  }

}
