import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { book } from '../_models/book';
import { BookService } from '../_services/book.service';


@Component({
  selector: 'app-books-addbook',
  templateUrl: './books-addbook.component.html',
  styleUrls: ['./books-addbook.component.css']
})
export class BooksAddbookComponent implements OnInit {

  book: book;
  addBookForm: FormGroup;
  constructor(private _bookservice: BookService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addBookFormMethod();
  }

  addBookFormMethod(){
    this.addBookForm = this._formBuilder.group({
      name:['',[Validators.required,Validators.minLength(1)]],
      author:['',[Validators.required,Validators.minLength(1)]],
      language:['',[Validators.required,Validators.minLength(1)]],
      pages:[Validators.required],
      publishdate:[Validators.required],
    });
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
    this._bookservice.addBook(this.book).subscribe(()=>{
      alert("Book Added.");
      this.addBookForm.reset();
    },error=>{
      alert("Failed to add book.");
    });
  }
}
