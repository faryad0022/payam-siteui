import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutDTO } from 'src/app/data/api/About/aboutDTO';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

constructor(private http: HttpClient) { }
public getAboutPage():Observable<IResponseResult<AboutDTO>>{
  return this.http.get<IResponseResult<AboutDTO>>('/siteAbout/get-about');
}
}