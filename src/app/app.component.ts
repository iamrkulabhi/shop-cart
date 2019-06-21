import { Component } from '@angular/core';
import { CartService } from './products/services/cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-cart';
  cartItemCount = 0;
  // subscription: Subscription;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCartDetails().subscribe(data => {
      this.cartItemCount = data.length;
      // console.log(data.length);
    });
  }

  gotoCart() {
    this.router.navigate(['/cart']);
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
