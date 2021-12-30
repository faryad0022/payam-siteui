import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDTO } from 'src/app/data/api/blog/BlogDTO';
import { BlogGroupDTO } from 'src/app/data/api/blog/BlogGroupDTO';
import { FilterBlogDTO } from 'src/app/data/api/blog/FilterBlogDTO';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class BlogGroupService {

constructor(private http: HttpClient) { }

public getBlogGroups():Observable<IResponseResult<BlogGroupDTO>>{ 
  return this.http.get<IResponseResult<BlogGroupDTO>>('/SiteBlogs/get-bloggroups');
}

public getLatestBlogs():Observable<IResponseResult<BlogDTO[]>>{ 
  return this.http.get<IResponseResult<BlogDTO[]>>('/SiteBlogs/get-latest-blogs');
}

public getBlogById(blogId: number):Observable<IResponseResult<BlogDTO>>{ 
  return this.http.get<IResponseResult<BlogDTO>>('/SiteBlogs/get-blog/' + blogId);
}

public getAllBlogsByfIlterAndPaging(filter: FilterBlogDTO):Observable<IResponseResult<FilterBlogDTO>>{
    let params;
    if(filter.title === null){
      filter.title = '';
    }  
      params = new HttpParams()
            .set('pageId', filter.pageId.toString())
            .set('title', filter.title)  
    return this.http.get<IResponseResult<FilterBlogDTO>>('/SiteBlogs/get-blogs',{params});
  }




}
