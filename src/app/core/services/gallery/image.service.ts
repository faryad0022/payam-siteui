import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterGalleryDTO } from 'src/app/data/api/gallery/FilterGalleryDTO';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

constructor(private http: HttpClient) { }
public getImages(filter: FilterGalleryDTO): Observable<IResponseResult<FilterGalleryDTO>>{
  let params;
  if(filter.title === null){
    filter.title = '';
  }  
    params = new HttpParams()
          .set('pageId', filter.pageId.toString())
          .set('title', filter.title)

  return this.http.get<IResponseResult<FilterGalleryDTO>>('/images/get-filter-images',{params});
}

}
