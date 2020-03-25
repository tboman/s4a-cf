import { Injectable } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Injectable()
export class CacheService {
  locations: [{ key: string; value: string }];
  titles: [{ key: string; value: string }];

  constructor() {}

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
  }
}
