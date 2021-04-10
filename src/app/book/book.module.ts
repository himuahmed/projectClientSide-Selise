import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';

import { BookComponent } from './book.component';
import { BooksComponent } from './Components/books/books.component';
import { BooksAddbookComponent } from './Components/books-addbook/books-addbook.component';
import { BooksEditbookComponent } from './Components/books-editbook/books-editbook.component';
import { BooksDeletebookComponent } from './Components/books-deletebook/books-deletebook.component';
import {MatBadgeModule} from '@angular/material/badge';

import { BookService } from './services/book.service';

import { BookRoutes } from './book.routing';
import { ProgressSpinnerService } from '../services/progressSpinner.service';
import { AllInterceptors } from 'src/interceptors';


@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    BooksAddbookComponent,
    BooksEditbookComponent,
    BooksDeletebookComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatBadgeModule,
    BookRoutes
  ],
  providers: [
    BookService,
    ProgressSpinnerService,
    AllInterceptors,
  ],
  bootstrap: [BookComponent]
})
export class BookModule { }
