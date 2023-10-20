
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DTOInfoUser } from '../models/DTOInfoUser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key);
  }

  // @HostListener('document:mousemove', ['$event']) 
  // onMouseMove(e : MouseEvent) {
  //   console.log(e);
  // }

  @HostListener('document:click', ['$event']) 
  onMouseclick(e : MouseEvent) {
    console.log(e);
  }
  constructor(private loginServive : LoginService , private route : Router){}


  userInfo: Login = {
    username: '',
    email: '',
    roles: ''
  };

  accesToken : string = "accessToken";
  token : string = "token"
  
  ngOnInit(): void {
    
      const token = this.loginServive.getAccesToken();
      
      
      //this.loginServive.setToken(token)

      this.loginServive.getUserDetails(token).subscribe((res: DTOInfoUser)=> {
        console.log(res);
        
        this.userInfo.username = res.name;
        this.userInfo.email = res.email;
        this.userInfo.roles = res.roles;
       },
       (error) => {
         if (error.status === 0) {
           
          //this.route.navigate(["/login"])
           
         }
       });
    
  }  


}
