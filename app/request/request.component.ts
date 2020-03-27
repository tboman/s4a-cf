import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Request } from "../model/request";
import { Interest } from "../model/interest";
import { Field } from "../model/field";
import { CacheService } from "../../services/cache.service";
import * as firebase from "firebase/app";

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"]
})
export class RequestComponent implements OnInit {
  form: FormGroup;
  request: Request;
  interests: Interest[];
  fields: [{key:string, value: string}];
  locations: [{key:string, value: string}];
  titles: [{key:string, value: string}];

  constructor(private fb: FormBuilder, private router: Router, private cacheService: CacheService) {
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
    this.request = new Request();
    this.request.email = firebase.auth().currentUser.email;
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ["", [Validators.required]]
    });
    this.interests = [
      {
        value: "",
        en_us: "Please Select"
      }
    ];
    this.locations = this.cacheService.getLocations();
    this.titles = this.cacheService.getTitles();
    this.fields = this.cacheService.getFields();
  }

  resetControl(control: string) {
    this.form.get(control).reset("");
  }

  addInterestDescription(doc) {
    var interest: Interest = new Interest();
    interest.value = doc.data().value;
    interest.en_us = doc.data().en_us;
    this.interests.push(interest);
  }

  onSubmit() {
    const db = firebase.firestore();
    this.request.email = firebase.auth().currentUser.email;
    this.request.creator = firebase.auth().currentUser.uid;
    this.request.created = new Date();
    console.log(this.request);

    db.collection("requests")
      .add(this.request)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    window.alert("Request submitted.");
    this.router.navigate(["/home"]);
  }
}
