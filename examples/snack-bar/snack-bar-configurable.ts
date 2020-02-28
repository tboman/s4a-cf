import { Component } from '@angular/core';
import { MatSnackBar, MdSnackBarHorizontalPosition, MdSnackBarVerticalPosition } from '@angular/material';
@Component({
  selector: 'snack-bar-configurable-example',
  templateUrl: 'snack-bar-configurable.html'
})
export class ConfigurableSnackBarExample {
  constructor(private snackBar: MatSnackBar) { }
  message: string = "Disco party!";
  action: string = "Dance";
  horOptions = ["start", "center", "end", "left", "right"];
  vertOptions = ["top", "bottom"];
  horOpt: MdSnackBarHorizontalPosition = "start";
  vertOpt: MdSnackBarVerticalPosition = "bottom";
  duration: number = 4000;
  openSnackBar() {
    if (this.message) {
      if (this.duration) {
      this.snackBar.open(this.message, this.action, { duration: 4000, horizontalPosition: this.horOpt, verticalPosition: this.vertOpt });
      } else {
        alert("Please enter a number for duration");
      }
    } else {
      alert("Please enter a value for message.");
    }
  }
  closeAll() {
    this.snackBar.dismiss();
  }
}