import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { BookService } from 'src/app/book/services/book.service';


import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProgressSpinnerService } from 'src/app/services/progressSpinner.service';
import { book } from '../../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,OnDestroy {

  unsubscribe$ = new Subject()
  books: book[]=[];
  bookId:number;
  bookName:string;
  deleteBookModal = false;
  displayedColumns: string[] = ['Id', 'Name', 'Author', 'Language', 'Pages', 'PublishDate', 'Edit', 'Delete'];
  datasource = new MatTableDataSource<book>(this.books);
  showSpinner =  this._progressSpinnerService.showSpinner;


  @ViewChild(MatSort) sort: MatSort;
  constructor(private bookService: BookService, private _progressSpinnerService: ProgressSpinnerService) { }

  ngOnInit(): void {
    this.getAllBooks();
    
  }

  ngAfterViewInit() {
    this.datasource.sort = this.sort;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  buttonClicked(id,name)
  {
    this.deleteBookModal = true;
    this.bookId = id;
    this.bookName = name;
  }


  getAllBooks(){
   this.bookService.getAllBooks().pipe(takeUntil(this.unsubscribe$)).subscribe((b: book[]) => {
     this.datasource.data = b;
   },error=>{
     console.log("Failed to fetch book records.");
   });
  }


  

}
