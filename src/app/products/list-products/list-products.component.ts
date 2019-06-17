import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  allProducts: Array<Product>;

  constructor(
    private productService: ProductsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getProducts();
    console.log(this.allProducts);
  }

  getProducts() {
    this.allProducts = this.productService.getProducts();
  }

  goTo(id: number) {
    this.router.navigate(['products', id]);
  }

}
