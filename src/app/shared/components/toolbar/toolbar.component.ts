import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../components/auth/login.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public loginSvc:LoginService) { }

  ngOnInit() {
  }


  onLogout(): void {
    this.loginSvc.logout();
  }

}
