import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router,CanActivateChild} from '@angular/router'
import { Observable } from 'rxjs/internal/Observable';
import { promise } from 'selenium-webdriver';
import { parse } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedCheckGuardService implements CanActivate {
  
  constructor(private route:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
  {    
    if(parseInt(sessionStorage.getItem('id'))>0){
      return true;
    }
    else{
      this.route.navigate(['/']);
      return false;
    }
  }

}
