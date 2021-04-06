import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Registration } from 'src/app/models/registration';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  signUpModel: Registration;
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.signUpFormMethod();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  signUpFormMethod(){
    return this.signUpForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
    },{validator: this.comparePasswords});
  }


  comparePasswords(regForm: FormGroup){
    return regForm.get('password').value ===  regForm.get('confirmPassword').value ? null : {'mismatch': true};
  }

  signup()
  {
    this.signUpModel = Object.assign({},this.signUpForm.value);
    console.log(this.signUpModel);
    this.authenticationService.registration(this.signUpModel).pipe(takeUntil(this.unsubscribe$)).subscribe(()=>{
      alert("Registration completed."); 
      this.router.navigate(['/auth/login']);
    },error=>{
      alert("Failed to register.");
    });
  }
  

}
