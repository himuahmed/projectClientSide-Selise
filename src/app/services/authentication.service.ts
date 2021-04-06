import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  constructor(private http:HttpClient) { }

  login(loginCredential: Login){

    return this.http.post(this.baseUrl+'user/login', loginCredential).pipe(
      map((response:any)=>{
        const res = response;
        if(res)
        {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  registration(registrationModel: Registration)
  {
   return this.http.post(this.baseUrl+'user/register', registrationModel);
  }

  isLoggedIn(){
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logOut(){
    localStorage.removeItem('token');
  }

  tokenDecoder()
  {
    const token =  localStorage.getItem('token');
    return this.jwtHelper.decodeToken(token);
  }

}
