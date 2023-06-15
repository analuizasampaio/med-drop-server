import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeFailureComponent } from './stripe-failure.component';

describe('StripeFailureComponent', () => {
  let component: StripeFailureComponent;
  let fixture: ComponentFixture<StripeFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeFailureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
