import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ListProductsComponent } from './products/list-products/list-products.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { CartProductsComponent } from './products/cart-products/cart-products.component';
import { CheckoutProductsComponent } from './products/checkout-products/checkout-products.component';
import { ProductsService } from './products/services/products.service';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    SingleProductComponent,
    CartProductsComponent,
    CheckoutProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
