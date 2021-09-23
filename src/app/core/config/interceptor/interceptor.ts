import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { DomainName } from "../pathUtility/pathTool";

export class Interceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // myRequest: HttpRequest<any> = req;
       const myRequest = req.clone({
           url: DomainName + req.url,
       });
       return next.handle(myRequest);
    }
    
}