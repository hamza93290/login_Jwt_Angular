import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable()
export class ApiInterceptorService  implements HttpInterceptor {

  
  constructor(private LoginService : LoginService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('et mouians')
    const token = this.LoginService.getToken() 
    console.log(token);
    
    req = req.clone({
      setHeaders: {
        Authorization: `bearer ${token}`
      }
    });

    console.log(req);
    
    return next.handle(req);
  }


}
