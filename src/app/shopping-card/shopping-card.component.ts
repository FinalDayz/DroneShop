import { Component, OnInit } from '@angular/core';
import {Product} from "../products/product/Product";
import {ShoppingCardService} from "../app/shared/shopping-card.service";

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
  productAmmounts = {};

  // products: Array<{number: {product: Product, amount: Number}}>;
  products: Array<Product> = [];
  totalPrice: number = 0;

  constructor(private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {

    this.products = this.shoppingCardService.getItems();
    let newProducts = [];
    console.log("prod: ", this.products);
    for(let product of this.products) {
      console.log(this.totalPrice);
      this.totalPrice += product.productPrice as number;
      console.log(product.productPrice);
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


