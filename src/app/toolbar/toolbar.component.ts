import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: any;

  constructor(private authenticationService: AuthenticationService) { 
    this.user = this.authenticationService.tokenDecoder()
    //console.log(this.username);
   }

  ngOnInit() {
  }

  isLoggedIn(){  
    return this.authenticationService.isLoggedIn();
  }

  logOut(){
    this.authenticationService.logOut();
  }
}
