import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { BreakpointObserver } from "@angular/cdk/layout";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { CacheService } from "../services/cache.service";

@Component({
  selector: "material-app",
  templateUrl: "app.component.html",
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(-20%)", opacity: 0 }),
        animate("250ms", style({ transform: "translateY(0)", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "translateY(0)", opacity: 1 }),
        animate("250ms", style({ transform: "translateY(-20%)", opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  adminLinks: Guides[];
  isToggledUppercase: boolean = false;
  hideComponents: boolean = false;
  hideGuides: boolean = false;
  hideMenu: boolean = true;
  hideCDK: boolean = false;
  title: string;
  user: firebase.User = null;

  constructor(
    private breakObserver: BreakpointObserver,
    private router: Router,
    private _firebaseAuth: AngularFireAuth,
    private cacheService: CacheService
  ) {
    var userLocal = this.user;
    this._firebaseAuth.authState.subscribe(user => {
      if (user) {
        userLocal = user;
        this.hideMenu = true;
      } else {
        userLocal = null;
      }
    });

    var component = this;
    var user = this.user;
    firebase.auth().onAuthStateChanged(function(newuser) {
      if (newuser) {
        console.info("app component changing to " + newuser.displayName );
        user = newuser;
        component.ngOnInit();
      } else {
        user = null;
      }
    });
  }

  signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    var localUser = this.user;
    var localRouter = this.router;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.info("logged in explicitly as " + result.user.email);
        localUser = result.user;
        localRouter.navigate([""]);
      });
  }

  get isMobile() {
    if (this.breakObserver.isMatched("(max-width: 599px)")) {
      return true;
    } else {
      return false;
    }
  }
  changeTitle(title: string) {
    this.title = title;
  }
  toggleGuides() {
    this.hideGuides = !this.hideGuides;
  }
  toggleComponents() {
    this.hideComponents = !this.hideComponents;
  }
  toggleUppercase() {
    this.isToggledUppercase = !this.isToggledUppercase;
    if (this.isToggledUppercase) {
      document.body.classList.add("button-uppercase");
      window.localStorage.setItem("isToggledUppercase", JSON.stringify(true));
    } else {
      document.body.classList.remove("button-uppercase");
      window.localStorage.setItem("isToggledUppercase", JSON.stringify(false));
    }
  }
  ngOnInit() {
    // warmup DB read cache
    console.log("Cache warmup");
    var mainsummary = this.cacheService.getArticle("mainsummary");

    if (document.body.classList.contains("button-uppercase")) {
      this.isToggledUppercase = true;
    } else if (window.localStorage.getItem("isToggledUppercase")) {
      this.isToggledUppercase = JSON.parse(
        window.localStorage.getItem("isToggledUppercase")
      );
    }
    this.adminLinks = [
      { name: "View Offers", url: "offers" },
      { name: "View Requests", url: "requests" },
      { name: "Match Maker", url: "matching" },
      { name: "Configure Interests", url: "interests" },
      { name: "Configure Research Fields", url: "fields" }
    ];

    this.user = firebase.auth().currentUser;
  }
}

interface Guides {
  url: string;
  name: string;
}
interface Settings {
  isToggledUppercase?: boolean;
  customTheme?: boolean;
  showBackToDocs?: boolean;
}
