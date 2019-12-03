import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent} from './components/pages/container-app/container-app.component';

const routes: Routes = [
  {
    path: '', component: ContainerAppComponent,
    children: [

      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
      { path: 'clients', loadChildren: () => import('./components/pages/clients/clients.module').then(m => m.ClientsModule) },
      { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
      { path: 'atcClientes', loadChildren: () => import('./components/pages/atc-clientes/atc-clientes.module').then(m => m.AtcClientesModule) },
      { path: 'marketing', loadChildren: () => import('./components/pages/marketing/marketing.module').then(m => m.MarketingModule) },
      { path: 'cobranza', loadChildren: () => import('./components/pages/cobranza/cobranza.module').then(m => m.CobranzaModule) },
    ]
  },

  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'footer', loadChildren: () => import('./shared/components/footer/footer.module').then(m => m.FooterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
