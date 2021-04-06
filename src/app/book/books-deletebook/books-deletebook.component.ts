import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-deletebook',
  templateUrl: './books-deletebook.component.html',
  styleUrls: ['./books-deletebook.component.css']
})
export class BooksDeletebookComponent implements OnInit,OnDestroy {
  unsubscribe$ = new Subject();
  @Input() id:number;
  @Input() bookName:string;
  constructor(private _bookService:BookService, private _router: Router,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    console.log(this.id);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  cancel()
  {
    location.reload();
  }

  deleteBook()
  {
    this._bookService.deleteBook(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe(next=>{
      alert("Record Deleted.");
      location.reload();
    },error=>{
      alert("Failed to delete record");
    });
  }

  isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }

}
