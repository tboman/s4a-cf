import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import { Offer } from "./model/offer";
import { Request } from "./model/request";
import { CacheService } from "../services/cache.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "home-component",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  requests = [];
  offers = [];
  interests;
  user: firebase.User = null;
  homesummary: {
    header: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  } = {
    header: "Your Page",
    p1: ".",
    p2: ".",
    p3: ".",
    p4: "."
  };
  constructor(
    private _firebaseAuth: AngularFireAuth,
    private cacheService: CacheService,
    private authService: AuthService
  ) {
    this.interests = cacheService.getInterests();
    this.homesummary = cacheService.getArticle("homesummary");

    var user = this.user;
    var component = this;
    firebase.auth().onAuthStateChanged(function(newuser) {
      if (newuser) {
        console.info("home component changing to " + newuser.displayName);
        user = newuser;
        component.ngOnInit();
      } else {
        user = null;
      }
    });
  }

  renderRequest(doc) {
    var request: Request = new Request();
    request.email = doc.data().email;
    request.title = doc.data().title;
    request.name = doc.data().name;
    request.work = doc.data().work;
    request.field = doc.data().field;
    request.need = doc.data().need;
    request.location = doc.data().location;
    request.created = doc.data().created.toDate();
    request.interest = this.interests.find(
      interest => interest.key === doc.data().interest
    ).value;
    this.requests.push(request);
  }

  renderOffer(doc) {
    var offer: Offer = new Offer();
    offer.email = doc.data().email;
    offer.title = doc.data().title;
    offer.name = doc.data().name;
    offer.work = doc.data().work;
    offer.field = doc.data().field;
    offer.need = doc.data().need;
    offer.location = doc.data().location;
    offer.created = doc.data().created.toDate();
    offer.interest = this.interests.find(
      interest => interest.key === doc.data().interest
    ).value;
    this.offers.push(offer);
  }

  ngOnInit() {
    const user = firebase.auth().currentUser;

    if (user) {
      this.homesummary.header = user.email;
      const db = firebase.firestore();
      db.collection("requests")
        .where("creator", "==", user.uid)
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            this.renderRequest(doc);
          });
        });
      db.collection("offers")
        .where("creator", "==", user.uid)
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            this.renderOffer(doc);
          });
        });
    }
  }
}
HomeComponent.prototype.onAuthStateChanged = function(user) {
  if (user) {
    this.nameContainer.innerText = user.displayName;
    this.uidContainer.innerText = user.uid;
    this.profilePic.src = user.photoURL;
    this.signedOutCard.style.display = "none";
    this.signedInCard.style.display = "block";
  } else {
    this.signedOutCard.style.display = "block";
    this.signedInCard.style.display = "none";
  }
};
