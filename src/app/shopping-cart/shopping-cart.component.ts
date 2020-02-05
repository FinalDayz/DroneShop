import { Component, OnInit } from '@angular/core';
import {Product} from "../products/product/Product";
import {ShoppingcartService} from "../app/shared/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  productAmmounts = {};

  // products: Array<{number: {product: Product, amount: Number}}>;
  products: Array<Product> = [];
  totalPrice: number = 0;

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit() {

    this.products = this.shoppingcartService.getItems();
    let newProducts = [];
    for(let product of this.products) {
      this.totalPrice += product.productPrice as number;
      if(this.productAmmounts[product.productId] == undefined) {
        this.productAmmounts[product.productId] = 1;
        newProducts.push(product);
      } else {
        // delete this.products[this.products.indexOf(product)];

        this.productAmmounts[product.productId]++;
      }
    }
    this.products = newProducts;
  }

  isInArray() {
  }
}


