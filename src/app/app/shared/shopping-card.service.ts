import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Product} from "../../products/product/Product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  private products: Array<Product> = [];

  constructor(private localStorageService: LocalStorageService) {
    if (this.localStorageService.hasItem("products")) {
    } else {
      this.localStorageService.setItem("products", []);
    }

    for(let product of this.localStorageService.getItem("products")) {
      this.products.push(product);
    }
  }

  getItems(): Array<Product> {
    return this.products;
  }

  addItem(product: Product) {
    this.products.push(product);
    this.localStorageService.setItem('products', this.products);
  }

  itemCount() {
    return this.products.length;
  }

  hasItems() {
    return this.products.length >= 1;
  }
}
