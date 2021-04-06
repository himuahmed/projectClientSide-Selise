import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginModel: Login;

  constructor(private _formBuilder: FormBuilder, private authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit() {
    this.loginFormMethod();
  }

  
  loginFormMethod(){
    return this.loginForm = this._formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    });
  }

  login(){
    this.loginModel = Object.assign({}, this.loginForm.value);
    console.log(this.loginModel);
    this.authenticationService.login(this.loginModel).subscribe(next=>{
      alert("Log in successful.");
      this.router.navigate(['/books']);
    }, error=>{
      alert('Failed to log in');
    }
    );
  }
}
