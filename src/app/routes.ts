import { Routes } from "@angular/router";


export const appRoutes: Routes = [
    {path: '', redirectTo:'', pathMatch:'full'},
   /*  {path:'', loadChildren:()=> import('./home/home.module').then(r=>r.HomeModule)}, */
    {path: '', loadChildren:() => import('./book/book.module').then(r=>r.BookModule)},
    {path:'auth', loadChildren:()=> import('./authentication/authentication.module').then(r=>r.AuthenticationModule)},
    {path: '**', redirectTo: 'books', pathMatch:'full'}
]