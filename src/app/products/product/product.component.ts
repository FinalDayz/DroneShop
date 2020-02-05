import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./Product";
import {ShoppingcartService} from "../../app/shared/shopping-cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  addGray: boolean;
  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit() {
  }

  addProduct(event: MouseEvent) {
    this.addGray = true;
    setTimeout(() => {
      this.addGray = false;
    }, 500);
    this.shoppingcartService.addItem(this.product);
  }
}
