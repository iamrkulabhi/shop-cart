import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../services/cart';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {

  cartData: Cart[];
  totalCart = 0;
  subscription: Subscription;
  displayedColumns: string[] = ['id', 'name', 'qty', 'price', 'action'];

  constructor(
    private cartService: CartService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.cartData = this.cartService.getCartItems().slice();
    this.cartData.forEach(element => {
      this.totalCart += element.itemTotal;
    });
    this.cartService.getCartDetails().subscribe(data => {
      this.cartData = data.slice();
      this.cartData.forEach(element => {
        this.totalCart += element.itemTotal;
      });
    });
  }

  onDeleteCartItem(index: number) {
    const updatedCart = this.cartService.deleteItemFromCart(index);
    this.cartService.updateCartService(updatedCart);
  }

  gotoCheckout() {
    if (this.cartData.length > 0) {
      this.router.navigate(['/checkout']);
    }
  }

}
