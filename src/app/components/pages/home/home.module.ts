import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material';
import {ClientsComponent} from '../clients/clients.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent, ClientsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[HomeComponent],
})
export class HomeModule {
 }
