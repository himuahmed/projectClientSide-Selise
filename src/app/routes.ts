import { Routes } from "@angular/router";


export const appRoutes: Routes = [
    {path: '', redirectTo:'', pathMatch:'full'},
    {path:'', loadChildren:()=> import('./home/home.module').then(r=>r.HomeModule)},
    {path: 'books', loadChildren:() => import('./book/book.module').then(r=>r.BookModule)},
    {path: '**', redirectTo: 'books', pathMatch:'full'}
]