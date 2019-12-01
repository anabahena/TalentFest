import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { from } from 'rxjs';
  // import { HomeModule} from './components/pages/home/home.module'
  // import { HomeComponent} from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'/', pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
