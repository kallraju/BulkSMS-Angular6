import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyNavComponent } from 'src/app/my-nav/my-nav.component';
import {UserLoggedCheckGuardService} from './user-logged-check-guard.service';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:"main",component:MyNavComponent,children:[
    {path:"sms",loadChildren:'src/app/sms-module/sms-module.module#SmsModuleModule'},
    {path:"reports",loadChildren:'src/app/reports-module/reports-module.module#ReportsModuleModule'}
  ],canActivate:[UserLoggedCheckGuardService]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
