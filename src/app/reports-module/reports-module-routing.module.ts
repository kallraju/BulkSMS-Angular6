import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmsreportsComponent} from 'src/app/reports-module/smsreports/smsreports.component';
const routes: Routes = [
  {path:'',component:SmsreportsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsModuleRoutingModule { }
