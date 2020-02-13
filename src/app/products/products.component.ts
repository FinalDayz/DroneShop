import { Component, OnInit } from '@angular/core';
import {Product} from "./product/Product";
import {ProductService} from "../shared/product.service";
import {ShoppingcartService} from "../app/shared/shopping-cart.service";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {MatDialog} from "@angular/material/dialog";
import {Role} from "../modals/Role";
import {AccountService} from "../shared/account.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loading: boolean = true;
  products: Array<Product>;

  constructor(private productService: ProductService,
              private shoppingcartService: ShoppingcartService,
              public dialog: MatDialog,
              private accountService: AccountService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.productService.getAll().subscribe(response => {
      this.products = response;
      this.loading = false;
    });
  }

  addProductDialog() {
    let dialogRef = this.dialog.open(EditProductComponent, {
      height: '800px',
      width: '1000px',
      data: null,
    });
    dialogRef.beforeClosed().subscribe(close => {
      this.loadProducts();
    });
  }

  isAdmin() {
    return this.accountService.isAdmin();
  }
}
