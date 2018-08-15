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
export class SmsreportsService {

  constructor(private _http:HttpClient) { }
  public reports(obj){
    //alert(id);
    console.log(obj);
    return this._http.post(myGlobal.url +'reports',obj).pipe(
      map(res=>res)
    )
  }
}
