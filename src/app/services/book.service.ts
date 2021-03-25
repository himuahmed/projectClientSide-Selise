import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { book } from '../models/book';



@Injectable({
  providedIn: 'root'
})
export class BookService {

books:book;
baseurl = environment.apiUrl;
constructor(private http:HttpClient) { }

getAllBooks(){
  return this.http.get<book[]>(this.baseurl+'getallbooks');
}

getBookById(id:number):Observable<book> {
  return this.http.get<book>(this.baseurl+'getbook/'+id);
}

addBook(book:book)
{
  return this.http.post(this.baseurl+'addbook', book);
}

editBook(book:book, id:number){
  return this.http.put(this.baseurl+"editbook/"+id, book);
}

deleteBook(id:number){
  return this.http.delete(this.baseurl+'deletebook/'+id);
}

}
