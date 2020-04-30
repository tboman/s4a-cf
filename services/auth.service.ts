import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

import { first } from "rxjs/operators";

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth
  ) {
    var userDetails = this.userDetails;
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        console.log(
          "Got sign-in notificaton, saving user details to local storage: " +
            user.email
        );
        this.userDetails = user;
        localStorage.setItem("user", JSON.stringify(this.userDetails));
        JSON.parse(localStorage.getItem("user"));
      } else {
        this.userDetails = null;
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });
    /**
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.info("setting current user in auth service to " + user.email);
        userDetails = user;
      } else {
        userDetails = null;
      }
    });
     */
  }

  signInWithPopup(callback) {
    var router = this.router;
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    var userDetails = this.userDetails;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        userDetails = result.user;
        localStorage.setItem("user", JSON.stringify(userDetails));
        console.log(
          "Signed in, saving user details to local storage: " +
            userDetails.email
        );
        callback(result.user);
      });
  }

  isLoggedIn() {
    this.userDetails = JSON.parse(localStorage.getItem("user"));
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  isAdmin() {
    const user = firebase.auth().currentUser;

    if (user == null) {
      return false;
    } else {
      return (
        user.uid == "7uFXFb65XRRpzwtraFMTFN58LCK2" ||
        user.uid == "OSdYE7GLcjMsVThjfbHfWG2uUhr1"
      );
    }
  }

  getUserdetails() {
    return this.userDetails;
  }

  logout() {
    this.userDetails = null;
    firebase
      .auth()
      .signOut()
      .then(res => this.router.navigate(["/"]));
  }
}
