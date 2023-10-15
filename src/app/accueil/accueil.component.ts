import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  product: any;
  constructor(private route: ActivatedRoute , private loginServive : LoginService){}


  userInfo : any ;
  username!: string 
  
  ngOnInit(): void {
    
    
    
   
    let token  = this.loginServive.getToken(); 
    this.loginServive.getUserProfile(token).subscribe((data) => {
      console.log(data.username +' 2.5')  
      this.username = data.username

      this.loginServive.getUserDetails(this.username).subscribe(res=> {

        console.log(res);
        this.userInfo = res
        this.userInfo = Array.of(this.userInfo)

  
       });
    })
    
  }  

}
