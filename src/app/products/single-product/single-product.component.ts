import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  currentProductId: number;
  currentProduct: Product;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.currentProductId = +params['id'];
      this.getProduct(this.currentProductId);
      // console.log(this.currentProduct);
    });
  }

  getProduct(id: number) {
    this.currentProduct = this.productService.getProduct(id);
  }

  addToCart(productId: number) {
  // tslint:disable-next-line: no-unused-expression
      const updatedCart = this.cartService.addToCart(productId);
      this.cartService.updateCartService(updatedCart);
    }

  addToCartAndBuy(productId: number) {
    this.addToCart(productId);
    this.gotoCart();
  }

  gotoCart() {
    this.router.navigate(['/cart']);
  }

}
