import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';


@Injectable()
export class AuthInjectableService implements HttpInterceptor {
  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.loginService.getToken();
      req = req.clone({
          setHeaders: {
              Authorization: "Bearer " + authToken
          }
      });
      return next.handle(req);
  }
}
