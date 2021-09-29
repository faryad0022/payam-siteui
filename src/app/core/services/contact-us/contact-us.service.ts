import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

constructor(
  private http: HttpClient
) { }


public sendMessage(msg: any):Observable<IResponseResult<any>>{
  return this.http.post<IResponseResult<any>>('/ContactUs/send-message',msg);
}
}
