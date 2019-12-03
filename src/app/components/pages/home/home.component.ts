import { Component, OnInit } from '@angular/core';
import { ClientsI} from '../../../shared/models/clients.intrface'
import { ClientsService } from '../clients.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clients:{
    id:number,
    nameClient:string,
    age:number,
    state:string,
    serviceType:string,
    antiguedad:number,
    rating:number
  }[];

  public clients$ :Observable <ClientsI[]>;

  constructor(private clientSvc: ClientsService) { }

  ngOnInit() {
    // this.clientSvc.getAllClients().subscribe(res => console.log('clients', res));
    this.clients$ = this.clientSvc.getAllClients();
  }



  
}


