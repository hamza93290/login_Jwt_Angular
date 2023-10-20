import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor( private httpClient :  HttpClient) { }

  private apiUrl = "http://localhost:8080"


  private tokenKey = 'authToken';

  

  postLogin( email : string , password : string ):Observable<any>{
   // return this.httpClient.post<any>(`${this.apiUrl}?email=${email}&password=${password}`,'');
      return this.httpClient.post<any>(this.apiUrl, {"email" : email, "password": password});
   }

   login(user:Login){
    //const userr = {username: user.username, password: user.password}
   return this.httpClient.post(this.apiUrl,user,{observe:'response'})
  }

  public loginRegister(value: Partial<{ username: string | null; password: string | null; }>): Observable<any> {
    console.log(value.username, value.password);
    let option: any;
    return this.httpClient.post<any>(`${this.apiUrl}/auth/generateToken`, value, {...option, responseType: 'text'} );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey,  JSON.stringify(token));
  }

  getAccesToken() : string  {

    const storedValue = localStorage.getItem(this.tokenKey);
    const myObject = JSON.parse(storedValue + "");
    console.log(myObject.accessToken);
    
    return myObject.accessToken;
  }

  getToken() : string  {

    const storedValue = localStorage.getItem(this.tokenKey);
    const myObject = JSON.parse(storedValue + "");
    console.log(myObject.token);
    
    return myObject.token;
  }

  removeToken(): void {

    localStorage.removeItem(this.tokenKey);

  }



  // Méthode pour vérifier si le token stocké est le même que le token passé en paramètre
  // isTokenValid(token: any): boolean {
  //   if(token == null){
  //     return false
  //   }else{
  //     const storedToken = this.getToken();
  //     return storedToken === token;
  //   }
    
  // }

  getRefreshToken(token: string): Observable<any>{

    return this.httpClient.post (`${this.apiUrl}/auth/refreshToken`, {"token" : token, })
  }

  getUserProfile(token: string) : Observable<any>  {
    // Create headers with the Authorization header containing the token
    //console.log(token);
    
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Include the headers in the HTTP request
    const options = { headers: headers };

   //console.log(options);
    
    // Make the request to the back-end
    return this.httpClient.get(`${this.apiUrl}/auth/welcome`, options)

    
    
  }

  getUserDetails(token: string): Observable<any>   {
   
    // Create headers with the Authorization header containing the token

    const headers = new HttpHeaders({

      'Authorization': `Bearer ${token}`

    });

    // Include the headers in the HTTP request

    const options = { headers: headers };

    // Make the request to the back-end

    return this.httpClient.get('http://localhost:8080/auth/userdetails', options)
  }



}
