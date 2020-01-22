import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../products/product/Product";

@Component({
  selector: 'app-shopping-product',
  templateUrl: './shopping-product.component.html',
  styleUrls: ['./shopping-product.component.css']
})
export class ShoppingProductComponent implements OnInit {
  @Input() product: Product;
  @Input() ammount: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
