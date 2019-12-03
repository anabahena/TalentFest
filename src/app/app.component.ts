import { Component } from '@angular/core';
import {ClientsComponent} from '../app/components/pages/clients/clients.component';
import {ClientsService} from '../app/components/pages/clients.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ClientsService]
})
export class AppComponent {
  title = 'reto-Banorte';
  listaClientes: ClientsComponent[];

  constructor(private service:ClientsService){

  }

}
