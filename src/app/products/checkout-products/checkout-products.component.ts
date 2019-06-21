import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  name: string;
  email: string;
  address: string;

  constructor() { }

  ngOnInit() {
  }

  onCheckout(form: NgForm) {
    console.log('checkout.');
  }

}
