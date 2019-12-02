import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './components/pages/home/home.module';
// import {HomeComponent} from './components/pages/home/home.component'
  import { from } from 'rxjs';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
// import { ClientsModule } from './components/pages/clients/clients.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component'


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    ToolbarComponent,
    ContainerAppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
