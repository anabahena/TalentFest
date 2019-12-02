import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
// import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule } from '@angular/material';

// 

@NgModule({
  declarations: [ClientsComponent,MatTableDataSource],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule

  ]
})
export class ClientsModule {
 }
