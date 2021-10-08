import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesTextComponent } from './quotes-text.component';

describe('QuotesTextComponent', () => {
  let component: QuotesTextComponent;
  let fixture: ComponentFixture<QuotesTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
