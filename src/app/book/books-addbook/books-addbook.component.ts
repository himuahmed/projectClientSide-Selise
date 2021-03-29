import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { book } from '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-books-addbook',
  templateUrl: './books-addbook.component.html',
  styleUrls: ['./books-addbook.component.css']
})
export class BooksAddbookComponent implements OnInit {
  unsubscribe$ = new Subject();
  book: book;
  booksToBeInserted: FormGroup;
  addBookForm: FormGroup;

  constructor(private _bookservice: BookService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.booksArrayFormMethod();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  booksArrayFormMethod(){
    this.booksToBeInserted = this._formBuilder.group(
      {
        booksArray: this._formBuilder.array([this.addBookFormMethod()])
      }
    )
  }

  addBookFormMethod(){
    return this.addBookForm =   this._formBuilder.group({
      name:['',[Validators.required,Validators.minLength(1)]],
      author:['',[Validators.required,Validators.minLength(1)]],
      language:['',[Validators.required,Validators.minLength(1)]],
      pages:[Validators.required],
      publishdate:[Validators.required],
    });
  }

  get bookFormArray() {
    return this.booksToBeInserted.get('booksArray') as FormArray;
  }

  addNewBookForm() {
    this.bookFormArray.push(this.addBookFormMethod());
  }

  deleteBookFromArray(bookIndex: number){
    this.bookFormArray.removeAt(bookIndex);
  }

  showRecords()
  {
    console.log(this.booksToBeInserted.value);
  }

  addBook()
  {
    this.book = Object.assign({},this.addBookForm.value);
    var date = new Date(this.book.publishdate);
    let newDate = JSON.stringify(date);
    newDate = newDate.slice(1,11);
    newDate = new Date(newDate).toISOString();
    this.book.publishdate = newDate;
    
    console.log(this.book);
    this._bookservice.addBook(this.book).pipe(takeUntil(this.unsubscribe$)).subscribe(()=>{
      alert("Book Added.");
      this.addBookForm.reset();
    },error=>{
      alert("Failed to add book.");
    });
  }
}
