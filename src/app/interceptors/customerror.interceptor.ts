import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CustomerrorInterceptor implements HttpInterceptor {

  constructor(private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((errorResponse:HttpErrorResponse)=>{

      if(errorResponse.status==404){
        console.log("Ürün bulunamadı");
      }else if(errorResponse.status==401){
        console.log("Login sayfasına yönlendiriliyorsunuz");
        //this.route.navigate("/login");
      }

      return throwError(()=>errorResponse.message);
    }))
  }
}
