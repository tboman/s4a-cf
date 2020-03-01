import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'west-signup',
  templateUrl: 'west.guide.html'
})
export class WestSignup implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}
  
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ['', [Validators.required]]
    })
  }

  resetControl(control: string) {
    this.form.get(control).reset('');
  }
  account = {};

  onSubmit() {
    alert("Successfully submitted form.");
  }
}
