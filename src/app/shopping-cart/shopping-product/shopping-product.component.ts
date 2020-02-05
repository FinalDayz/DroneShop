import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../products/product/Product";
import {ShoppingcartService} from "../../app/shared/shopping-cart.service";

@Component({
  selector: 'app-shopping-product',
  templateUrl: './shopping-product.component.html',
  styleUrls: ['./shopping-product.component.css']
})
export class ShoppingProductComponent implements OnInit {
  @Input() product: Product;
  @Input() ammount: number = 1;
  @Input() products: Array<Product> = [];

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit() {
  }

  deleteItem() {
    this.shoppingcartService.removeOneItem(this.product.productId);
    this.ammount--;
    if(this.ammount !== 0) {
      return;
    }

    let index = 0;
    for(const product of this.products) {
      if(product.productId === this.product.productId) {
        this.products.splice(index, 1);
        console.log(this.products);
        return;
      }
      index++;
    }
    //
  }
}
