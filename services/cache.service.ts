import { Injectable } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Injectable()
export class CacheService {
  locations;
  titles;
  fields: [{ key: string; value: string }] = [{
          key: "",
          value: "Please Select"
        }];
  interests: [{ key: string; value: string }] = [{
          key: "",
          value: "Please Select"
        }];

  constructor() {
    const db = firebase.firestore();
    db.collection("fields")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.addField(doc);
        });
      });
    db.collection("interests")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.addInterest(doc);
        });
      });
  }

  public getLocations() {
    if (!this.locations) {
      this.locations = [
        {
          key: "",
          value: "Please Select"
        },
        {
          key: "us",
          value: "United States of America"
        },
        {
          key: "eu",
          value: "European Union Country"
        },
        {
          key: "ca",
          value: "Canada"
        },
        {
          key: "sa",
          value: "South America"
        },
        {
          key: "oth",
          value: "Other (please note in comment field which country)"
        }
      ];
    }
    return this.locations;
  }

  public getTitles() {
    if (!this.titles) {
      this.titles = [
        {
          key: "",
          value: "Please Select"
        },
        {
          key: "researcher",
          value: "Researcher at private institution"
        },
        {
          key: "junior",
          value: "Junior faculty member at a university/research institution"
        },
        {
          key: "senior",
          value: "Senior faculty member at a university/research institution"
        },
        {
          key: "fellow",
          value: "Postdoctoral fellow"
        },
        {
          key: "lecturer",
          value: "Lecturer"
        },
        {
          key: "oth",
          value:
            "Other (please note in comment field which title you would like to use)"
        }
      ];
    }
    return this.titles;
  }
  public getFields() {
    return this.fields;
  }
  addField(doc) {
    var field = { key: "", value: "" };
    field.key = doc.data().key;
    field.value = doc.data().en_us_title;
    this.fields.push(field);
  }
  public getInterests() {
    return this.interests;
  }
  addInterest(doc) {
    var interest = { key: "", value: "" };
    interest.key = doc.data().key;
    interest.value = doc.data().en_us_title;
    this.interests.push(interest);
  }
}
