import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { MainPageDTO } from "src/app/data/api/MainPage/MainPageDTO";
import { IResponseResult } from "src/app/data/common/IResponseResult";
import { MainpageService } from "../services/mainPage/main-page.service";

@Injectable({ providedIn: 'root' })
export class MainPageResolver implements Resolve<IResponseResult<MainPageDTO>> {
  constructor(
      private maigPageService: MainpageService,
      private taoastr: ToastrService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.maigPageService.getDetails().pipe(
        catchError(error => {
            this.taoastr.error('خطا در برقراری ارتباط', 'Error');
            return of(null);
        })
    );
  }
}