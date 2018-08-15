import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { SmsModuleRoutingModule } from './sms-module-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import {NumberOnlyDirective} from './number-only.directive';
import { 
  
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatProgressBarModule,
  MatRadioModule
 } from '@angular/material';
 
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SmsModuleRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatProgressBarModule,
    MatRadioModule
    
  ],
  declarations: [ComposeComponent,  DynamicComponent,NumberOnlyDirective]
})
export class SmsModuleModule { }
