import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  currentProductId: number;
  currentProduct: Product;

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.currentProductId = +params['id'];
      this.getProduct(this.currentProductId);
      console.log(this.currentProduct);
    });
  }

  getProduct(id: number) {
    this.currentProduct = this.productService.getProduct(id);
  }

}
