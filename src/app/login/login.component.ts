import { HttpClient ,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { catchError, throwError } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  mode:Number=0; 
  loading = true;
  constructor( private router : Router , private loginServ : LoginService  ){}



  ngOnInit() {
    
     let token = this.loginServ.getToken();
     console.log('token recuperer' , token);
     
     
     if(this.loginServ.isTokenValid(token) && !null){
        console.log("le meme");
        this.router.navigate(['/accueil'])
      }else{
        console.log("pas le meme ");
        this.loading = false;
      }
        try {
          const tokenInfo: any = jwt_decode(token)
          const expireDate: any = tokenInfo.exp; 
          console.log("tokenInfo = %o and expireDate = %o", tokenInfo, expireDate)
          return jwt_decode(token);
        } catch(Error) {
          return null;
        }
        

  }

   onLog(data:NgForm){  

  let user = data.value
  this.loginServ.loginRegister(user)
    .subscribe((response: any) => {
      console.log(response);
      this.loginServ.setToken(response)
      this.DecodedToken(response)
      if (!response.error) {
       console.log("direction acceuil");
       
        // this.router.navigate(['/accueil']);
      }
    });
}




DecodedToken(token: string ): any {
try {
  const tokenInfo: any = jwt_decode(token)
  const expireDate: any = tokenInfo.exp; 
  console.log("tokenInfo = %o and expireDate = %o", tokenInfo, expireDate)
  return jwt_decode(token);
} catch(Error) {
  return null;
}
}
  

}
