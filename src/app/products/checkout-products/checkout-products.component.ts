import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../services/cart';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  name: string;
  email: string;
  address: string;
  showSpinner: boolean;
  checkoutItems: Cart[];
  totalAmount: number;

  constructor(
    private router: Router,
    private cartService: CartService
    ) {
  }

  ngOnInit() {
    this.showSpinner = false;
    this.checkoutItems = this.cartService.getCartItems();
    console.log(this.checkoutItems);
    this.checkoutItems.forEach(element => {
      this.totalAmount += element.itemTotal;
    });
  }

  onCheckout(form: NgForm) {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.cartService.updateProductStock(this.checkoutItems);
      this.cartService.clearCart();
      this.router.navigate(['/']);
    }, 3000);
  }

}
