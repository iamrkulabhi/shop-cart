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

  getCartDetails(): Observable<Cart[]> { return this.subject.asObservable(); }

  getCartItems(): Cart[] { return this.cartItems; }

  updateCartService(carts: Cart[]) {
    this.subject.next(this.cartItems);
  }

  addToCart(productId: number) {
    // console.log(productId);
    if (this.productService.getProduct(productId) != null) { // check valid product
      if (this.checkItemExistInCart(productId) != null) {
        // console.log(this.checkItemExistInCart(productId));
        const currentCartItem = this.checkItemExistInCart(productId);
        currentCartItem.itemQty = currentCartItem.itemQty + 1;
        currentCartItem.itemTotal = currentCartItem.itemQty * currentCartItem.itemPrice;
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
    return this.cartItems;
  }

  deleteItemFromCart(index: number) {
    return this.cartItems.splice(index, 1);
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
