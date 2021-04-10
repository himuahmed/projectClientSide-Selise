import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { AuthenticationService } from '../authentication/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor( private authenticationService: AuthenticationService,private router:Router){}

  canActivate():  boolean {
    if(this.authenticationService.isLoggedIn())
    {
      return true;
    }
    else
    {
      alert("Unauthorized.");
      this.router.navigate(['/auth/login']);
    }

  }
  
}
