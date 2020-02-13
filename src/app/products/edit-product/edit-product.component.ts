import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../product/Product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../shared/product.service";
import {FeedbackService} from "../../feedback.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private productForm: FormGroup;
  product: Product;
  isEditing = true;

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
    private feedbackService: FeedbackService) {
    if(this.data === null || this.data === undefined) {
      this.isEditing = false;
      this.product = new Product();
    } else {
      this.product = data;
    }
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      productId: new FormControl(this.product.productId),
      productImagePath: new FormControl(this.product.productImagePath),
      productName: new FormControl(this.product.productName),
      productDesc: new FormControl(this.product.productDesc),
      productPrice: new FormControl(this.product.productPrice)
    });
  }

  save() {
    this.product = this.productForm.value;
    if(this.isEditing)
      this.saveEdits();
    else
      this.saveNew();
  }

  private saveEdits() {
    this.productService.updateProduct(this.product).subscribe(response => {
      this.closeWithMessage("Succesvol bewerkingen opgeslagen");
    });
  }

  private saveNew() {
    this.productService.createProduct(this.product).subscribe(response => {
      this.closeWithMessage("Product succesvol aangemaakt");
    });
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.productService.deleteProduct(this.product.productId).subscribe(response => {
      this.closeWithMessage("Product verwijderd");
    });
  }
  private closeWithMessage(message: string) {
    this.feedbackService.showInfoMessage(message);
    setTimeout(res => {
      this.close();
    }, 750);
  }
}
