import { Component, OnInit } from '@angular/core';
import {Product} from "./product/Product";
import {ProductService} from "../shared/product.service";
import {ShoppingCardService} from "../app/shared/shopping-card.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService,
              private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(response => {
      this.products = response;
    });
  }

}
