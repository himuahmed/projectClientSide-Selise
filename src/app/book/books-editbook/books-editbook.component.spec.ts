import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksEditbookComponent } from './books-editbook.component';

describe('BooksEditbookComponent', () => {
  let component: BooksEditbookComponent;
  let fixture: ComponentFixture<BooksEditbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksEditbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksEditbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
