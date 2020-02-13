import { Injectable } from '@angular/core';
import {Account} from "../modals/Account";
import {ApiService} from "./api.service";
import {Product} from "../products/product/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private reourcePath = '/product';

  constructor(private api: ApiService) { }

  getAll() {
    return this.api.get<Array<Product>>(this.buildURL("all"));
  }

  private buildURL(url) {
    return this.reourcePath + "/" + url;
  }

  updateProduct(product: Product) {
    return this.api.post(this.buildURL("edit"), product);
  }

  deleteProduct(productId: Number) {
    return this.api.delete(this.buildURL("delete/" + productId));
  }

  createProduct(product: Product) {
    return this.api.put(this.buildURL("create"), product);
  }
}
