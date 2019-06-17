import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { CartProductsComponent } from './products/cart-products/cart-products.component';
import { CheckoutProductsComponent } from './products/checkout-products/checkout-products.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'cart', component: CartProductsComponent },
  { path: 'checkout', component: CheckoutProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
