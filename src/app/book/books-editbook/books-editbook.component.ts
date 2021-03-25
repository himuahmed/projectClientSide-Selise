import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-editbook',
  templateUrl: './books-editbook.component.html',
  styleUrls: ['./books-editbook.component.css']
})
export class BooksEditbookComponent implements OnInit {
  book:book;
  editBookForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _bookService:BookService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookById();
  }

  editBookFormMethod(){
    this.editBookForm = this._formBuilder.group({
      name:[this.book.name,[Validators.required,Validators.minLength(1)]],
      author:[this.book.author,[Validators.required,Validators.minLength(1)]],
      language:[this.book.language,[Validators.required,Validators.minLength(1)]],
      pages:[this.book.pages,Validators.required],
      publishdate:[this.book.publishdate,Validators.required],
    });
  }

  getBookById(){
    this._bookService.getBookById(+this._activatedRoute.snapshot.params['id']).subscribe((b:book)=>{
      this.book = b;
      var date = new Date(this.book.publishdate);
      let newDate = JSON.stringify(date);
      newDate = newDate.slice(1,11);
      this.book.publishdate = newDate;
    },error=>{
      alert('Failed to obtain the book.')
    },()=>{
      this.editBookFormMethod();
    });
  }

  editBook(){
    this.book = Object.assign({},this.editBookForm.value);
    this._bookService.editBook(this.book,+this._activatedRoute.snapshot.params['id']).subscribe(next=>{
      alert('updated book info.');
      this.editBookForm.reset(this.book);
    },error=>{
      alert('Failed to update book.')
    });
  }

}
