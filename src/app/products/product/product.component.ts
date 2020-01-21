import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./Product";
import {ShoppingCardService} from "../../app/shared/shopping-card.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  constructor(private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {
  }

  addProduct() {
    this.shoppingCardService.addItem(this.product);
  }
}
