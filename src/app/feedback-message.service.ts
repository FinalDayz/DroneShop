import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MatSnackBarHorizontalPosition} from "@angular/material/snack-bar/typings/snack-bar-config";

@Injectable({
  providedIn: 'root'
})
export class FeedbackMessageService {


  constructor(private snackBar: MatSnackBar) { }

  public showInfoMessage(message: string, duration: number = 2000) {
    this.snackBar.open(message, '', {
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: duration
    });
  }
}
