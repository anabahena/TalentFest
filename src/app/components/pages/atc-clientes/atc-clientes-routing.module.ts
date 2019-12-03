import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtcClientesComponent } from './atc-clientes.component';

const routes: Routes = [{ path: '', component: AtcClientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtcClientesRoutingModule { }
