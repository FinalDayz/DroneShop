import { Component, OnInit } from '@angular/core';
import {Product} from "../products/product/Product";
import {ShoppingCardService} from "../app/shared/shopping-card.service";

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  products: Array<Product>;

  constructor(private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {
    this.products = this.shoppingCardService.getItems();
  }

}
