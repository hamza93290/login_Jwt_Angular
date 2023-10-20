import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { LoginService } from './services/login.service';
const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class InterceptHttpInterceptor implements HttpInterceptor {


  constructor (private loginService: LoginService){}
   
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
      
          
          const token = this.loginService.getToken();
          this.loginService.getRefreshToken(token).subscribe( data => {
            this.loginService.setToken(data)
            console.log(data);
            
          
          console.log('erreur statue 403');
          console.error(error);
        })
        
        console.error(error);
        return throwError(error);
        
      })
    );
 }
}



