import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [AdminComponent, MessageFormComponent, MessagesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
