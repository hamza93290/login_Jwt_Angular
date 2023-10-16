
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DTOInfoUser } from '../models/DTOInfoUser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private loginServive : LoginService){}


  userInfo: Login = {
    username: '',
    email: '',
    roles: ''
  };
  
  ngOnInit(): void {
    
      this.loginServive.getUserDetails(this.loginServive.getToken()).subscribe((res: DTOInfoUser)=> {
        console.log(res);
        
        this.userInfo.username = res.name;
        this.userInfo.email = res.email;
        this.userInfo.roles = res.roles;
       });
    
  }  


}
