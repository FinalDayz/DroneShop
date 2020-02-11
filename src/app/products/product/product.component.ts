import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./Product";
import {ShoppingcartService} from "../../app/shared/shopping-cart.service";
import {Role} from "../../modals/Role";
import {AccountService} from "../../shared/account.service";
import {EditProductComponent} from "../edit-product/edit-product.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  addGray: boolean;
  constructor(private shoppingcartService: ShoppingcartService,
              private accountService: AccountService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  addProduct(event: MouseEvent) {
    this.addGray = true;
    setTimeout(() => {
      this.addGray = false;
    }, 500);
    this.shoppingcartService.addItem(this.product);
  }

  clickEdit() {
    console.log(this.product);
    let dialogRef = this.dialog.open(EditProductComponent, {
      height: '800px',
      width: '1000px',
      data: this.product,
    });
  }

  public isAdmin(): boolean {
    return this.accountService.hasRole(Role.ADMIN);
  }
}
