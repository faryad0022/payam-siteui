import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterGalleryDTO } from 'src/app/data/api/gallery/FilterGalleryDTO';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

constructor(private http: HttpClient) { }
public getImages(): Observable<IResponseResult<FilterGalleryDTO>>{
  return this.http.get<IResponseResult<FilterGalleryDTO>>('/images/get-filter-images');
}

}
