import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Offer } from "../model/offer";
import { CacheService } from "../../services/cache.service";
import * as firebase from "firebase/app";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.css"]
})
export class OfferComponent implements OnInit {
  form: FormGroup;
  offer: Offer;
  interests: [{ key: string; value: string }];
  fields: [{ key: string; value: string }];
  locations: [{ key: string; value: string }];
  titles: [{ key: string; value: string }];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cacheService: CacheService
  ) {}

  ngOnInit() {
    this.offer = new Offer();
    this.offer.email = firebase.auth().currentUser.email;
    this.offer.name = firebase.auth().currentUser.displayName;
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ["", [Validators.required]]
    });
    this.interests = this.cacheService.getInterests();
    this.locations = this.cacheService.getLocations();
    this.titles = this.cacheService.getTitles();
    this.fields = this.cacheService.getFields();
  }

  resetControl(control: string) {
    this.form.get(control).reset("");
  }

  onSubmit() {
    const db = firebase.firestore();
    this.offer.email = firebase.auth().currentUser.email;
    this.offer.creator = firebase.auth().currentUser.uid;
    this.offer.created = new Date();
    console.log(this.offer);

    db.collection("offers")
      .add(this.offer)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    window.alert("Offer submitted.");
    this.router.navigate(["/home"]);
  }
}
