import { Component } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-stripe-product',
  templateUrl: './stripe-product.component.html',
  styleUrls: ['./stripe-product.component.css']
})
export class StripeProductComponent {
  title = 'angular-stripe';
  priceId = 'price_1NJJ5ADmpzzBxcb87rKppdmR';
  product = {
    title: 'Classic Peace Lily',
    subTitle: 'Popular House Plant',
    description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
    price: 18.00
  };
  quantity = 1;
  stripe: Stripe;

  async checkout() {
    this.stripe = await loadStripe(environment.stripe_key);

    if(!this.stripe) {
      return;
    }

    // Call your backend to create the Checkout session.

    // When the customer clicks on the button, redirect them to Checkout.;
    const { error } = await this.stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: this.priceId, quantity: this.quantity }],
      successUrl: `${window.location.href}/success`,
      cancelUrl: `${window.location.href}/failure`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log(error);
    }

  }

}
