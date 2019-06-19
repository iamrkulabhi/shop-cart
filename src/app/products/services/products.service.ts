import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: Product[] = [
    new Product(1, 'iPhone 6', 'MB-iP6', 'This is description.', 980.00, 8, ''),
    new Product(2, 'One Plus 7', 'MB-OP7', 'This is description.', 920.00, 10, ''),
    new Product(3, 'Redmi Note 7', 'MB-XN7', 'This is description.', 360.00, 2, ''),
    new Product(4, 'Samsung M20', 'MB-SSM20', 'This is description.', 270, 6, ''),
    new Product(5, 'Vivo V15', 'MB-VV15', 'This is description.', 460.00, 9, ''),
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products.slice();
  }

  getProduct(id: number): Product {
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
    return;
  }
}
