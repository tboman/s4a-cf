import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Offer } from "../model/offer";
import { Interest } from "../model/interest";
import * as firebase from "firebase/app";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.css"]
})
export class OfferComponent implements OnInit {
  form: FormGroup;
  offer: Offer;
  interests: Interest[];

  constructor(private fb: FormBuilder, private router: Router) {
    const db = firebase.firestore();

    db.collection("offer-interests")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.addInterestDescription(doc);
        });
      });
  }

  ngOnInit() {
    this.offer = new Offer();
    this.offer.email = firebase.auth().currentUser.email;
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ["", [Validators.required]]
    });
    this.interests = [
      {
        value: "collaboration",
        en_us: "Collaborating with scientists in Africa on specific projects"
      }
    ];
  }

  resetControl(control: string) {
    this.form.get(control).reset("");
  }

  addInterestDescription(doc) {
    var interest: Interest = new Interest();
    interest.value = doc.data().value;
    interest.en_us = doc.data().en_us;
    console.log(interest);
    this.interests.push(interest);
  }

  onSubmit() {
    const db = firebase.firestore();
    this.offer.email = firebase.auth().currentUser.email;
    this.offer.creator = firebase.auth().currentUser.uid;
    this.offer.created = new Date();
    console.log(this.offer);

    db.collection("offer")
      .add(this.offer)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    this.router.navigate("/home");
  }
}
