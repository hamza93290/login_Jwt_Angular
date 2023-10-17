
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DTOInfoUser } from '../models/DTOInfoUser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private loginServive : LoginService , private route : Router){}


  userInfo: Login = {
    username: '',
    email: '',
    roles: ''
  };
  
  ngOnInit(): void {
    
      const token = this.loginServive.getToken()
      this.loginServive.setToken(token)

      this.loginServive.getUserDetails(this.loginServive.getToken()).subscribe((res: DTOInfoUser)=> {
        console.log(res);
        
        this.userInfo.username = res.name;
        this.userInfo.email = res.email;
        this.userInfo.roles = res.roles;
       },
       (error) => {
         if (error.status === 0) {
           
          this.route.navigate(["/login"])
           
         }
       });
    
  }  


}
