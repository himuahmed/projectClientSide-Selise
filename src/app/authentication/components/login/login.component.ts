import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Login } from 'src/app/authentication/interfaces/login';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  loginForm: FormGroup;
  loginModel: Login;

  constructor(private _formBuilder: FormBuilder, private authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit() {
    this.loginFormMethod();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
    this.authenticationService.login(this.loginModel).pipe(takeUntil(this.unsubscribe$)).subscribe(next=>{
      alert("Log in successful.");
      this.router.navigate(['']);
    }, error=>{
      alert('Failed to log in');
    }
    );
  }
}
