import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'simple-snack-bar-example',
  templateUrl: 'simple-snack-bar.html'
})
export class SimpleSnackBarExample {
  constructor(private snackBar: MatSnackBar) { }
  message: string = "Disco party!";
  action: string = "Dance";
  openSnackBar() {
    if (this.message) {
      if (this.action) {
        this.snackBar.open(this.message, this.action, { duration: 4000 });
      } else {
        this.snackBar.open(this.message, undefined, { duration: 4000 });
      }
    } else {
      alert("Please enter a value for message.");
    }
  }
}