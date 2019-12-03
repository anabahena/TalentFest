import { Component, OnInit } from '@angular/core';


// Importar el servicio
import { MessageService } from '../../../services/message.service';
import { Message } from '../../../shared/models/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  // Crear los datos de las propiedades del formulario de mensajes, para crearlos
  message = {} as Message;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  addMessage() {
    console.log('hola');
    // console.log(this.message);
  }

}
