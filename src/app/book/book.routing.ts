import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { BooksAddbookComponent } from './books-addbook/books-addbook.component';
import { BooksEditbookComponent } from './books-editbook/books-editbook.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [ 
  { 
    path: 'books',
    children: [
        {path: '', component: BooksComponent},
        {path: 'addbook', component: BooksAddbookComponent, canActivate:[AuthenticationGuard]},
        {path: 'edit-book/:id', component: BooksEditbookComponent,canActivate:[AuthenticationGuard]},
    ]
  },

];
export const BookRoutes = RouterModule.forChild(routes);
