import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Firestore
import { AngularFirestore } from '@angular/fire/firestore'
import { Message } from '../shared/models/message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messagesCollection;
  messages: Observable<Message[]>;
  messageDoc;


  constructor(public db: AngularFirestore) {
    this.messages = this.db.collection('messages').valueChanges();
   }

   getMessages(){
     return this. messages;
   }
}
