import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../_services/book.service';
import {MatTableDataSource} from '@angular/material/table';
import { book } from '../_models/book';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: book[]=[];
  bookId:number;
  bookName:string;
  deleteBookModal = false;
  displayedColumns: string[] = ['Id', 'Name', 'Author', 'Language', 'Pages', 'PublishDate', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource<book>(this.books);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  buttonClicked(id,name)
  {
    this.deleteBookModal = true;
    this.bookId = id;
    this.bookName = name;
  }


  getAllBooks(){
   this.bookService.getAllBooks().subscribe((b: book[]) => {
     this.dataSource.data = b;
   },error=>{
     console.log("Failed to fetch book records.")
   });
  }


  

}
