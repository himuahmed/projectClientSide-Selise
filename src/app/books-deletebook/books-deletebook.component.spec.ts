import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDeletebookComponent } from './books-deletebook.component';

describe('BooksDeletebookComponent', () => {
  let component: BooksDeletebookComponent;
  let fixture: ComponentFixture<BooksDeletebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDeletebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDeletebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
