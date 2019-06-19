import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Observable, Subject } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject<Cart[]>();
  cartItems: Cart[] = [];

  constructor(private productService: ProductsService) { }

  getCartDetails(): Cart[] { return this.cartItems; }

  addToCart(productId: number) {
    // console.log(productId);
    if (this.productService.getProduct(productId) != null) { // check valid product
      if (this.checkItemExistInCart(productId) != null) {
        console.log(this.checkItemExistInCart(productId));
      } else {
        this.cartItems.push(
          new Cart(
            productId,
            this.productService.getProduct(productId).name,
            this.productService.getProduct(productId).price, 1
            )
        );
      }
    }
    // console.log(this.cartItems);
  }

  checkItemExistInCart(productId: number): Cart {
// tslint:disable-next-line: prefer-for-of
    if (this.cartItems.length > 0) {
// tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].itemId === productId) {
          return this.cartItems[i];
        }
      }
    }
    return;
  }
}
