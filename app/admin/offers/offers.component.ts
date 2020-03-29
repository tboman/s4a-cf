import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { Offer } from "../../model/offer";
import { CacheService } from "../../../services/cache.service";

@Component({
  selector: "offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css"]
})
export class OffersComponent implements OnInit {
  offers = [];
  interests;

  constructor(private cacheService: CacheService) {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection("offers")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.renderOffer(doc);
        });
      });

    this.interests = cacheService.getInterests();
  }

  ngOnInit() {}

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
}
