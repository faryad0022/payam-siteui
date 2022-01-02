import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainPageDTO } from 'src/app/data/api/MainPage/MainPageDTO';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  constructor(private http: HttpClient) { }
  getDetails():Observable<IResponseResult<MainPageDTO>>
  {
    return this.http.get<IResponseResult<MainPageDTO>>('/mainpagesetting/get-details');
  }
}
