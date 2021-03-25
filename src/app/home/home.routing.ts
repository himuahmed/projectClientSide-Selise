
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {path:'',
    children:[
      {path: '', component:AuthComponent},
    ]
  }  
];

export const HomeRoutes = RouterModule.forChild(routes);
