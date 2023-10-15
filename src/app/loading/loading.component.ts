import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoadingComponent  {
  // constructor(private loginService: LoginService) { }
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //     const authToken = this.loginService.getToken();
  //     req = req.clone({
  //         setHeaders: {
  //             Authorization: "Bearer " + authToken
  //         }
  //     });
  //     console.log(next.handle(req));
      
  //     return next.handle(req);
  // }
}

