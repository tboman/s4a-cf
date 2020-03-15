import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "home-component",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  requests = [];
  offers = [];
  user: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth) {
   // var userLocal = this.user;
    this._firebaseAuth.authState.subscribe(user => {
      if (user) {
   //     userLocal = user;

        const db = firebase.firestore();
        db.collection("requests")
          .get()
          .then(snapshot => {
            snapshot.docs.forEach(doc => {
              this.renderRequest(doc);
            });
          });
        db.collection("offer").where("creator", "==", user.uid)
          .get()
          .then(snapshot => {
            snapshot.docs.forEach(doc => {
              this.renderOffer(doc);
            });
          });
      } else {
        this.user = null;
      }
    });
    this.user = firebase.auth().currentUser;
  }

  renderRequest(doc) {
    var request = { id: 1, title: "", description: "", created: new Date() };
    request.id = doc.id;
    request.title = doc.data().title;
    request.description = doc.data().description;
    request.created = doc.data().created.toDate();

    this.requests.push(request);
  }
  renderOffer(doc) {
    var offer = { email: "", title: "", name: "", created: new Date() };
    offer.email = doc.data().email;
    offer.title = doc.data().title;
    offer.name = doc.data().name;
    
    this.offers.push(offer);
  }

  ngOnInit() {}
}
