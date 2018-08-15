import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeComponent } from 'src/app/sms-module/compose/compose.component';
import { DynamicComponent } from 'src/app/sms-module/dynamic/dynamic.component';


const routes: Routes = [
  {path:'',redirectTo:"compose",pathMatch:"full"},
  {path:'compose',component:ComposeComponent},
  {path:'dynamic',component:DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsModuleRoutingModule { }
