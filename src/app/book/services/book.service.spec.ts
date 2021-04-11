/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { BookService } from './book.service';
import { book } from '../interfaces/book';


describe('Service: Book', () => {

  let httpTestController: HttpTestingController;
  let bookService: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [BookService]
    });
  });

  beforeEach(()=>{
    bookService = TestBed.inject(BookService);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpTestController.verify();
  });

/*   it('should ...', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  })); */

  it('Should test http getAllBook method.', ()=>{
    let testBook: book[]/*  = [
      { id: 2,name: "Ice and fire",author: "R R Martin",language: "English",pages: 332,publishdate: "2016-06-14T00:00:00"}
    ]; */
    bookService.getAllBooks().subscribe((book)=>{
      expect(testBook).toBe(book,'Should match mocked data.');
    });
    const requestedBooks = httpTestController.expectOne(bookService.baseurl+'getallbooks');
    expect(requestedBooks.cancelled).toBeFalse();
    expect(requestedBooks.request.responseType).toEqual('json');
   // request.flush(testBook);
  });


  it('Should test http addBook method.', ()=>{
    let testBook: book[] = [
      { id: 2,name: "Ice and fire",author: "R R Martin",language: "English",pages: 332,publishdate: "2016-06-14T00:00:00"}
    ];
    bookService.addBook(testBook).subscribe((book)=>{
      expect(book).toBe(testBook,'Should check mocked data.');
    });
    const request = httpTestController.expectOne(bookService.baseurl+'addbook');
    expect(request.cancelled).toBeFalse();
    expect(request.request.responseType).toEqual('json');
    //request.flush(testBook);
  });

  it('Should test http deleteBook method.',()=>{
    let bookId = 2;
    bookService.deleteBook(bookId).subscribe();
    const deleteRequest = httpTestController.expectOne(bookService.baseurl+'deletebook/'+bookId);
    expect(deleteRequest.cancelled).toBeFalse();
    expect(deleteRequest.request.responseType).toEqual('json');
  });

  it('Should test http editBook method.',()=>{
    let bookId = 2;
    let testBook: book = { id: 2,name: "Ice and fire",author: "R R Martin",language: "English",pages: 332,publishdate: "2016-06-14T00:00:00"}
    bookService.editBook(testBook, bookId).subscribe((book)=>{
      expect(book).toBe(testBook, "Should match mocked book info.");
    });
    const editBookRequest = httpTestController.expectOne(bookService.baseurl+'editbook/'+bookId);
    expect(editBookRequest.cancelled).toBeFalse();
    expect(editBookRequest.request.responseType).toEqual('json');
  });

  it('Should test http getBookById method', ()=>{
    let bookId = 2;
    let testBook: book;
    bookService.getBookById(bookId).subscribe((book)=>{
      expect(book).toEqual(testBook,"Should match mocked book info.");
    });
    const fetchBookRequest = httpTestController.expectOne(bookService.baseurl+'getbook/'+bookId);
    expect(fetchBookRequest.cancelled).toBeFalse();
    expect(fetchBookRequest.request.responseType).toEqual('json');
  })

});
