import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/book.service';
import {MatTableDataSource} from '@angular/material/table';
import { book } from '../_models/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: book[];
  bookId:number;
  bookName:string;
  deleteBookModal = false;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  buttonClicked(id,name)
  {
    this.deleteBookModal = true;
    this.bookId = id;
    this.bookName = name;
  }


  getAllBooks(){
   this.bookService.getAllBooks().subscribe((b: book[]) => {
     this.books = b;
     console.log(this.books);   
   },error=>{
     console.log("Failed to fetch book records.")
   });
  }


  

}
