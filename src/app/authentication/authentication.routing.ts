import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { 
    path:'auth',
    children:[
      {path:'login', component: LoginComponent},
      {path:'signup', component: SignupComponent}
    ]
  },
];

export const AuthenticationRoutes = RouterModule.forChild(routes);
