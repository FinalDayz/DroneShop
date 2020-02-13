import { Injectable } from '@angular/core';
import {Order} from "./shopping-cart/Order";
import {ApiService} from "./shared/api.service";
import {Product} from "./products/product/Product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private reourcePath = '/order';

  constructor(private api: ApiService) { }

  private buildURL(url) {
    return this.reourcePath + "/" + url;
  }

  createOrder(order: Order) {
    return this.api.post(this.buildURL("createOrder"), order);
  }
}
