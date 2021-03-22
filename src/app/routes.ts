import { Routes } from "@angular/router";
import { BooksAddbookComponent } from "./books-addbook/books-addbook.component";
import { BooksEditbookComponent } from "./books-editbook/books-editbook.component";
import { BooksComponent } from "./books/books.component";

export const appRoutes: Routes = [
    {path: 'index', component: BooksComponent},
    {path: 'addbook', component: BooksAddbookComponent},
    {path: 'edit-book/:id', component: BooksEditbookComponent},
    {path: '**', redirectTo: 'index', pathMatch:'full'}
]