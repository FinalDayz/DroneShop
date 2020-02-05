import { Component, OnInit } from '@angular/core';
import {Product} from "./product/Product";
import {ProductService} from "../shared/product.service";
import {ShoppingcartService} from "../app/shared/shopping-cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService,
              private shoppingcartService: ShoppingcartService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(response => {
      this.products = response;
    });
  }

}
