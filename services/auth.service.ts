import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

import { first } from "rxjs/operators";

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth
  ) {
    var userDetails = this.userDetails;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.info("setting current user in auth service to " + user.email);
        userDetails = user;
      } else {
        userDetails = null;
      }
    });
  }

  signInWithPopup() {
    var router = this.router;
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    var userDetails = this.userDetails;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(token =>
            console.log("got token for " + result.user.displayName)
          );
        userDetails = result.user;
        localStorage.setItem("user", JSON.stringify(userDetails));
        this.cacheService.getProfile(userDetails.uid);
        router.navigate(["/profile"]);
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
