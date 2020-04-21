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
import { AuthService } from "../services/auth.service";

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
  user: any;
  isToggledUppercase: boolean = false;
  hideComponents: boolean = false;
  hideGuides: boolean = false;
  hideMenu: boolean = true;
  enabledMenu: boolean = false;
  hideCDK: boolean = false;
  title: string;

  constructor(
    private breakObserver: BreakpointObserver,
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private cacheService: CacheService,
    private authService: AuthService
  ) {
    var showMenu = this.enabledMenu;
    var component = this;
    var cacheService = this.cacheService;

    angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.user = this.authService.getUserdetails();
      } else {
        this.user = null;
      }
      console.log("Getting current user from auth service as " + this.user);
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
    this.cacheService.getLocations();
    this.cacheService.getTitles();
    this.cacheService.getInterests();
    this.cacheService.getFields();

    if (document.body.classList.contains("button-uppercase")) {
      this.isToggledUppercase = true;
    } else if (window.localStorage.getItem("isToggledUppercase")) {
      this.isToggledUppercase = JSON.parse(
        window.localStorage.getItem("isToggledUppercase")
      );
    }
    this.adminLinks = [
      { name: "Configure Interests", url: "interests" },
      { name: "Configure Research Fields", url: "fields" }
    ];
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
