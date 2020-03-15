import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Offer } from './module/offer';

@Component({
  selector: 'west-guide',
  templateUrl: 'west.guide.html'
})
export class WestGuide implements OnInit {
  form: FormGroup;
  offer: Offer;

  constructor(
    private fb: FormBuilder
  ) {}
  
  ngOnInit() {
    this.offer = new Offer();
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

  onSubmit() {
    alert("Successfully submitted form.");
  }
}
