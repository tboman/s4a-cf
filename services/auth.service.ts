import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router: Router) {
    /** var userDetails = this.userDetails;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.info("setting current user in auth service to " + user.email);
        userDetails = user;
      } else {
        userDetails = null;
      }
    });
    **/
  }

  signInWithPopup() {
    var router = this.router;
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(token => console.log("got token for "+ result.user.email));
        router.navigate(['home']);
      });
  }

  isLoggedIn() {
    if (firebase.auth().currentUser == null) {
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
      return user.uid == '7uFXFb65XRRpzwtraFMTFN58LCK2' || user.uid == 'OSdYE7GLcjMsVThjfbHfWG2uUhr1';
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
