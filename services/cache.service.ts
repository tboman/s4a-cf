import { Injectable } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Injectable()
export class CacheService {
      locations: [{key:string, value: string}];

  constructor() {}

  getLocations() {

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
        value: "Europe"
      }
    ];
    }
    return this.locations;
  }
}
