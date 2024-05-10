import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpReqInterceptorService implements HttpInterceptor {

  constructor(
   /// private dataService: DataService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      //'Content-Type': 'application/json'
      //'Access-Control-Allow-Origin':'http://localhost:4200'
      'Access-Control-Allow-Headers': ['X-Requested-With, Content-Type, Accept, Origin, Authorization']
      ,'Access-Control-Allow-Methods': ['GET, POST, PUT, DELETE, OPTIONS']
    };
    if(sessionStorage.getItem("t")) {
      headersConfig["Authorization"] = `Basic ${sessionStorage.getItem("t")}`;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
