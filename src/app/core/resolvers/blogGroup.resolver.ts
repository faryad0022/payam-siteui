import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { BlogGroupDTO } from "src/app/data/api/blog/BlogGroupDTO";
import { IResponseResult } from "src/app/data/common/IResponseResult";
import { BlogGroupService } from "../services/blog/blogGroup.service";

@Injectable({ providedIn: 'root' })
export class BlogGroupResolver implements Resolve<IResponseResult<BlogGroupDTO>> {
  constructor(
      private blogGroupService: BlogGroupService,
      private taoastr: ToastrService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.blogGroupService.getBlogGroups().pipe(
        catchError(error => {
            this.taoastr.error('خطا در برقراری ارتباط', 'Error');
            return of(null);
        })
    );
  }
}