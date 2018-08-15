import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatCardModule,
  MatInputModule,
  MatProgressBarModule
 
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { LogoutComponent } from './logout/logout.component';
//import { NumberOnlyDirective } from './sms-module/number-only.directive';



@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    LoginComponent,
    LogoutComponent,
   // NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
