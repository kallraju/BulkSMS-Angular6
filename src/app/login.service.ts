import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import * as myGlobal from './myGlobal';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public login(obj):Observable<any> {
    //console.log(obj);
    return this.http.post(myGlobal.url + 'login',obj).pipe(
      map(res =>res)
    )
 }

 

}
