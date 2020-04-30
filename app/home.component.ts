import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
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
  homesummary: {
    header: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
  } = {
    header: "Your Page",
    p1: "Below you can see the full list of your offers and requests, along with any matches that has been made.  When you submit a new request or offer, you should receive an initial confirmation email immediately and a match confirmation within 2 business days if one exists.  If there is no match at the time of your submittal, you will receive a notification if one is made at a later time.",
    p2: "",
    p3: "",
    p4: "",
    p5: ""
  };
  constructor(
    private cacheService: CacheService,
    private authService: AuthService
  ) {
    this.interests = cacheService.getInterests();
    this.homesummary = cacheService.getArticle("homesummary");
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