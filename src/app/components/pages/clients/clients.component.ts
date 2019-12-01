import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService} from '../clients.service';
import { Observable } from 'rxjs';
import { ClientsI } from 'src/app/shared/models/clients.intrface';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients:{
    id:number,
    nameClient:string,
    age:number,
    state:string,
    serviceType:string,
    rating:number
  }
  public client$ :Observable <ClientsI>;
  

  
  constructor(private route:ActivatedRoute, private clientSvc: ClientsService) { }

  ngOnInit() {

    const clientsId=this.route.snapshot.params.id;
    this.client$ = this.clientSvc.getOneClient(clientsId);
  }

}
