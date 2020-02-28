import { Component } from '@angular/core';

@Component({
  selector: 'form-field-in-a-form-example',
  templateUrl: 'form-field-in-a-form.html',
  styleUrls: ['form-field-in-a-form.css']
})
export class FormFieldInAFormExample {
  account = {};
  onSubmit() {
    alert("Successfully submitted form.");
  }
}