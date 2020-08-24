import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   @ViewChild(StripeCardComponent) card: StripeCardComponent;
 
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
 
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };
 
  stripeTest: FormGroup;
 
  constructor(private fb: FormBuilder, private stripeService: StripeService) {}
 
  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
 
  createToken(): void {
    const name = this.stripeTest.get('name').value;
    let clientSecret = "pi_1HJjZtI24F1DWpOnTy593J31_secret_cSw4hmBRZIXVLsI6M1wFmxV2K"
    this.stripeService.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.card.element,
        billing_details: {
          name: name
        }
      },
      setup_future_usage: 'off_session'
    }).subscribe( data => console.log(data), err => console.log(err))
    // this.stripeService
    //   .createToken(this.card.element, { name })
    //   .subscribe((result) => {
    //     if (result.token) {
    //       // Use the token
    //       console.log(result.token.id);
    //     } else if (result.error) {
    //       // Error creating the token
    //       console.log(result.error.message);
    //     }
    //   });
  }
}
