import { Component, OnInit } from '@angular/core';
import { ClientsI} from '../../../shared/models/clients.intrface'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  public clients$ :Observable <ClientsI[]>;

  constructor() { }

  ngOnInit() {

  }



  
}


