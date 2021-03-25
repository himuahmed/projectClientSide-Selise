import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from './_services/book.service';
import { BooksAddbookComponent } from './books-addbook/books-addbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';

import {MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooksEditbookComponent } from './books-editbook/books-editbook.component';
import { BooksDeletebookComponent } from './books-deletebook/books-deletebook.component';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksAddbookComponent,
    BooksEditbookComponent,
    BooksDeletebookComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
   
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
