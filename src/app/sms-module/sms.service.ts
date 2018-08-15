import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import * as myGlobal from '../myGlobal';
@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private _http:HttpClient) { }

  public getsenderids(id){
    //alert(id);
    return this._http.post(myGlobal.url +'sms/getsids',{id:id}).pipe(
      map(res=>res)
    )
  }

  public getsavedmsg(id){
    //alert(id);
    return this._http.post(myGlobal.url +'sms/getsavedmsg',{id:id}).pipe(
      map(res=>res)
    )
  }

  public gettemplates(id){
    //alert(id);
    return this._http.post(myGlobal.url +'sms/gettemplates',{id:id}).pipe(
      map(res=>res)
    )
  }

  public compose(obj){
    return this._http.post(myGlobal.url +'sms/compose',obj).pipe(
      map(res=>res)
    )
  }
}
