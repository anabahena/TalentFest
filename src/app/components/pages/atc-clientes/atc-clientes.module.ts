import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AtcClientesRoutingModule } from './atc-clientes-routing.module';
import { AtcClientesComponent } from './atc-clientes.component';


@NgModule({
  declarations: [AtcClientesComponent],
  imports: [
    CommonModule,
    AtcClientesRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AtcClientesModule { }
