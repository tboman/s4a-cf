import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Component({
  selector: "home-component",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('reading db');
    const db = firebase.firestore();
    db.collection("requests")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          console.log('listing doc');
          console.log(doc.data);
        });
      });
  }
}
