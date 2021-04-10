import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { BooksAddbookComponent } from './Components/books-addbook/books-addbook.component';
import { BooksEditbookComponent } from './Components/books-editbook/books-editbook.component';
import { BooksComponent } from './Components/books/books.component';

const routes: Routes = [ 
  { 
    path: '',
    children: [
        {path: '', component: BooksComponent},
        {path: 'addbook', component: BooksAddbookComponent, canActivate:[AuthenticationGuard]},
        {path: 'edit-book/:id', component: BooksEditbookComponent,canActivate:[AuthenticationGuard]},
    ]
  },

];
export const BookRoutes = RouterModule.forChild(routes);
