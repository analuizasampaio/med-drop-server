import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeProductComponent } from './stripe-product.component';

describe('StripeProductComponent', () => {
  let component: StripeProductComponent;
  let fixture: ComponentFixture<StripeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
