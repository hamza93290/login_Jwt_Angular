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


  status:Number=0; 
  loading = true;
  constructor( private router : Router , private loginServ : LoginService  ){}



  ngOnInit() {
    
    //  let token = this.loginServ.getToken();
    //  console.log('token recuperer' , token);
     
    //  console.log(token);
     
     
    //  if(this.loginServ.isTokenValid(token)  ){

    //     console.log("le meme");
    //     //this.router.navigate(['/accueil'])
    //   }else{
    //     console.log("pas le meme ");
        
    //   }
    //     try {
    //       const tokenInfo: any = jwt_decode(token)
    //       const expireDate: any = tokenInfo.exp; 
    //       console.log("tokenInfo = %o and expireDate = %o", tokenInfo, expireDate)
          
    //       return jwt_decode(token);
    //     } catch(Error) {
    //       return null;
    //     }
        

  }

   onLog(data:NgForm){  

  let user = data.value
  this.loginServ.loginRegister(user)
    .subscribe((response: any) => {

      console.log(JSON.parse(response));
      const token = JSON.parse(response);
      

      this.loginServ.setToken(token)
      this.router.navigate(["/accueil"])

      //this.DecodedToken(token)
      
      
    },
    (error) => {
      if (error.status === 403) {
        this.status = 1;
      }
    });
}




// DecodedToken(token: string ): any {
// try {
//   const tokenInfo: any = jwt_decode(token)
//   const expireDate: any = tokenInfo.exp; 
//   console.log("tokenInfo = %o and expireDate = %o", tokenInfo, expireDate)
//   return jwt_decode(token);
// } catch(Error) {
//   return null;
// }
// }
  

}
