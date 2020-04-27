import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Profile } from "../model/profile";
import { CacheService } from "../../services/cache.service";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  profile: Profile;
  interests;
  fields;
  registersummary: {
    header: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
  } = {
    header: "Your Page",
    p1: ".",
    p2: ".",
    p3: ".",
    p4: ".",
    p5: "."
  };

  locations: [{ key: string; value: string }];
  titles: [{ key: string; value: string }];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cacheService: CacheService,
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) {
    const db = firebase.firestore();
    this.registersummary = cacheService.getArticle("registersummary");
  }

  ngOnInit() {
    this.profile = new Profile();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ["", [Validators.required]]
    });
    this.interests = [
      {
        value: "",
        en_us: "Please Select"
      }
    ];
    this.interests = this.cacheService.getInterests();
    this.locations = this.cacheService.getLocations();
    this.titles = this.cacheService.getTitles();
    this.fields = this.cacheService.getFields();
  }

  resetControl(control: string) {
    this.form.get(control).reset("");
  }

  registerWithGoogle() {
    var router = this.router;
    var register = this;
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
          .then(token => register.tryRegister());
        router.navigate(["/profile"]);
      });
  }

  registerWithFacebook() {
    window.alert("Not yet working.");
  }

  registerWithMicrosoft() {
    window.alert("Not yet working.");
  }

  registerWithTwitter() {
    window.alert("Not yet working.");
  }

  registerWithEmail() {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(this.profile.email, this.profile.password)
      .then(result => {
        window.alert("You have been successfully registered!");
        console.log(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  tryRegister() {
    const db = firebase.firestore();
    this.profile.email = firebase.auth().currentUser.email;
    this.profile.name = firebase.auth().currentUser.displayName;
    this.profile.creator = firebase.auth().currentUser.uid;
    this.profile.created = new Date();
    this.cacheService.putProfile(this.profile);
    this.router.navigate(["/profile"]);
  }
}
