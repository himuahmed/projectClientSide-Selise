import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAddbookComponent } from './books-addbook.component';

describe('BooksAddbookComponent', () => {
  let component: BooksAddbookComponent;
  let fixture: ComponentFixture<BooksAddbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAddbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
