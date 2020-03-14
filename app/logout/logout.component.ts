import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private _firebaseAuth: AngularFireAuth) {}

  ngOnInit() {
    if (firebase.auth().currentUser) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.reload();
      });
    }
  }
}
