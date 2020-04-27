import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Profile } from "../model/profile";
import { CacheService } from "../../services/cache.service";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  profile: Profile;
  loginsummary: {
    header: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
  } = {
    header: "Login",
    p1: ".",
    p2: ".",
    p3: ".",
    p4: ".",
    p5: "."
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cacheService: CacheService,
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) {
    const db = firebase.firestore();
    this.loginsummary = cacheService.getArticle("loginsummary");
  }

  ngOnInit() {
    this.profile = new Profile();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ["", [Validators.required]]
    });
  }

  resetControl(control: string) {
    this.form.get(control).reset("");
  }

  loginWithEmail() {
    return this.afAuth.auth.signInWithEmailAndPassword(this.profile.email, this.profile.password)
      .then(result => {
        this.router.navigate(['/profile']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
}
