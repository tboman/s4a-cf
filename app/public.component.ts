import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html'
})
export class PublicComponent {
  constructor(private dialog: MatDialog){}
  confirmGoBack() {
    this.dialog.open(ConfirmGoBackDialog, {disableClose: true});
  }
}

@Component({
  selector: 'confirm-go-back-dialog',
  templateUrl: './confirm.dialog.html'
})
export class ConfirmGoBackDialog {
  constructor(private dialogRef: MatDialogRef<ConfirmGoBackDialog>){}
  cancel() {
    this.dialogRef.close();
  }
  goBack() {
    this.dialogRef.close();
    window.location.href = "https://chan4077-material2-docs.firebaseapp.com";
  }
}