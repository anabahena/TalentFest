import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent} from './clients.component';
// import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
// import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    // ClientsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule
  ]
})
export class ClientsModule {
 }
