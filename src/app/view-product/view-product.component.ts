import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../products/product/Product";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ShoppingcartService} from "../app/shared/shopping-cart.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product: Product;

  constructor(
    public dialogRef: MatDialogRef<ViewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private shoppingcartService: ShoppingcartService
  ) {
    this.product = data;
  }

  ngOnInit() {
  }

  addProduct() {
    this.shoppingcartService.addItem(this.product);
  }
}
