import { Component, OnInit } from '@angular/core';
// importando el servicio
import { MessageService } from '../../../services/message.service'
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService ) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(messages => {
      console.log(messages)      
    })
  }

}
