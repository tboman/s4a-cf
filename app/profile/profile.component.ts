import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Profile } from "../model/profile";
import { CacheService } from "../../services/cache.service";
import { Observable } from 'rxjs';
import * as firebase from "firebase/app";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  profilesummary: {
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

  locations: [{key:string, value: string}];
  titles: [{key:string, value: string}];
  profile: Observable<Profile>;

  constructor(private fb: FormBuilder, private router: Router, private cacheService: CacheService) {
    const db = firebase.firestore();
    this.profilesummary = cacheService.getArticle("profilesummary");
        console.log("getting profile for "+firebase.auth().currentUser.uid);
    this.profile = this.cacheService.getProfile(firebase.auth().currentUser.uid);
   
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ["", [Validators.required]]
    });
    this.locations = this.cacheService.getLocations();
    this.titles = this.cacheService.getTitles();
  }

  resetControl(control: string) {
    this.form.get(control).reset("");
  }

  onSubmit() {
    const db = firebase.firestore();
    this.profile.email = firebase.auth().currentUser.email;
    this.profile.creator = firebase.auth().currentUser.uid;
    this.profile.created = new Date();
    console.log(this.profile);

    this.cacheService.putProfile(this.profile);
    window.alert("Profile updated.");
    this.router.navigate(["/home"]);
  }
}
