import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the library
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51HJbU2I24F1DWpOn39zVdmcTrFWEFdfjFRn28FQ9omhfRJII0tjRdXRy44l9GNCKsrxxffcO20kn9KSs0T4RRfXB00mI1tJP0Y'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
