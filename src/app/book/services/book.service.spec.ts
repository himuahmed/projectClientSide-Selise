/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { BookService } from './book.service';

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
    bookService = TestBed.get(BookService);
  });

  it('should ...', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
