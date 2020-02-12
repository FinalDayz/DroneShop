import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../product/Product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../shared/product.service";
import {FeedbackMessageService} from "../../feedback-message.service";

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
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
    private feedbackService: FeedbackMessageService) {
    this.product = data;
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
    console.log(this.product);
    this.productService.updateProduct(this.product).subscribe(response => {
      this.feedbackService.showInfoMessage("Successvol bewerkingen opgeslagen");

      setTimeout(res => {
        this.close();
      }, 750);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
