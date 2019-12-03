import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatGridListModule} from '@angular/material';
import {FooterModule} from '../../../shared/components/footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    FooterModule,
    FlexLayoutModule
  ]
})
export class LoginModule { }
