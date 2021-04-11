import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

import { BooksAddbookComponent } from './books-addbook.component';

describe('BooksAddbookComponent', () => {
  let component: BooksAddbookComponent;
  let fixture: ComponentFixture<BooksAddbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAddbookComponent ],
      imports:[
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers:[BookService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAddbookComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    //fixture.detectChanges();
  });

  it('Check if bookName is valid',()=>{
    let bookName = component.addBookForm.controls['name'];
    expect(bookName.pristine).toBeTruthy('Should have pristine');
    expect(bookName.valid).toBeFalsy('Should have valid');
    expect(bookName.errors['required']).toBeTruthy('Book Name is required.');   
    bookName.setValue('aaaaa');
    expect(bookName.value.length).toBeGreaterThanOrEqual(5);
  });

  it('Check if author is valid',()=>{
    let author = component.addBookForm.controls['author'];
    expect(author.pristine).toBeTruthy('Should have pristine');
    expect(author.valid).toBeFalsy('Should have valid');
    expect(author.errors['required']).toBeTruthy('Author is required.');  
    author.setValue('aaaaa');
    expect(author.value.length).toBeGreaterThanOrEqual(1);
  });

  it('Check if language is valid',()=>{
    let language = component.addBookForm.controls['language']; 
    expect(language.pristine).toBeTruthy('Should have pristine');
    expect(language.valid).toBeFalsy('Should have valid');
    expect(language.errors['required']).toBeTruthy('Language is required.');  
    language.setValue('aaaaa');
    expect(language.value.length).toBeGreaterThanOrEqual(1);
  });

  it('Check if pages is valid',()=>{
    let pages = component.addBookForm.controls['pages'];
    expect(pages.pristine).toBeTruthy('Should have pristine');
    expect(pages.valid).toBeFalsy('Should have valid');
    expect(pages.errors['required']).toBeTruthy('Language is required.');  
    pages.setValue(1);
    expect(pages.value).toBeGreaterThanOrEqual(1);
  });

  it('Check if publishdate is valid',()=>{
    let publishdate = component.addBookForm.controls['publishdate'];
    expect(publishdate.pristine).toBeTruthy();
    expect(publishdate.valid).toBeFalsy();
    expect(publishdate.errors['required']).toBeTruthy();  
  });

  it('should test addBookForm', () => {
    expect(component.addBookForm.valid).toBeFalsy();
  });


  it('Check If new bookFrom is created or not',()=>{
    const initialLength = component.bookFormArray.length;
    component.addNewBookForm();
    expect(component.bookFormArray.length).toBeGreaterThan(initialLength);
  });

  it('Check If new bookFrom is deleted or not',()=>{
    let index = 0;
    component.addNewBookForm();
    const len = component.bookFormArray.length;
    component.deleteBookFromArray(index);
    expect(component.bookFormArray.length).toBeLessThan(len);
  })
});
