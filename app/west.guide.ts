import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Offer } from "./model/offer";
import * as firebase from "firebase/app";

@Component({
  selector: "west-guide",
  templateUrl: "west.guide.html"
})
export class WestGuide implements OnInit {
  form: FormGroup;
  offer: Offer;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.offer = new Offer();
    this.offer.email = firebase.auth().currentUser.email;
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ["", [Validators.required]]
    });
  }

  resetControl(control: string) {
    this.form.get(control).reset("");
  }

  onSubmit() {
    console.log(this.offer);
    const db = firebase.firestore();
    this.offer.email = firebase.auth().currentUser.email;
    this.offer.creator = firebase.auth().currentUser.uid;

    db.collection("offer")
      .add(this.offer)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    alert("Successfully submitted form. ");
  }
}
