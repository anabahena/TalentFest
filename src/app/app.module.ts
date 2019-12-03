import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { HomeModule } from './components/pages/home/home.module';
// import {HomeComponent} from './components/pages/home/home.component'
// import { from } from 'rxjs';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
// import { ClientsModule } from './components/pages/clients/clients.component';
import {ReactiveFormsModule} from '@angular/forms';

import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatTableDataSource} from '@angular/material/table';
// import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatTableModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/';
// import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {isBoolean} from 'util';
import {MatMenuModule} from '@angular/material/menu';
import {FooterModule} from './shared/components/footer/footer.module';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    FooterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
