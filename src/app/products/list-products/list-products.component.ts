import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../services/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  allProducts: Array<Product>;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.getProducts();
    console.log(this.allProducts);
  }

  getProducts() {
    this.allProducts = this.productService.getProducts();
  }

  addToCart(productId: number) {
// tslint:disable-next-line: no-unused-expression
    this.cartService.addToCart(productId);
  }

  goTo(id: number) {
    this.router.navigate(['products', id]);
  }

}
