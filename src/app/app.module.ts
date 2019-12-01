import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './components/pages/home/home.module';
// import {HomeComponent} from './components/pages/home/home.component'
  import { from } from 'rxjs';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    ToolbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
