import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-books-deletebook',
  templateUrl: './books-deletebook.component.html',
  styleUrls: ['./books-deletebook.component.css']
})
export class BooksDeletebookComponent implements OnInit {

  @Input() id:number;
  @Input() bookName:string;
  constructor(private _bookService:BookService, private _router: Router) { }

  ngOnInit(): void {
    console.log(this.id);
  }

  cancel()
  {
    location.reload();
  }

  deleteBook()
  {
    this._bookService.deleteBook(this.id).subscribe(next=>{
      alert("Record Deleted.");
      location.reload();
    },error=>{
      alert("Failed to delete record");
    });
  }


}
