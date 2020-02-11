import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../product/Product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private productForm: FormGroup;
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) {
    this.product = data;
    console.log(this.product);
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      productImagePath: new FormControl(),
      productName: new FormControl(),
      productDesc: new FormControl(),
      productPrice: new FormControl()
    });
  }

  submitChanges() {
    console.log(this.productForm.value);
  }
}
