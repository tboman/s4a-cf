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
  private user: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this._firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;

        firebase.auth().currentUser = user;

        firebase.auth().currentUser.getIdToken().then(token => console.log('got token', token))

        const db = firebase.firestore();
        db.collection("requests")
          .get()
          .then(snapshot => {
            snapshot.docs.forEach(doc => {
              this.renderRequest(doc);
            });
          });
      } else {
        this.user = null;
      }
    });
  }

  renderRequest(doc) {
    var request = { id: 1, title: "", description: "", created: new Date() };
    request.id = doc.id;
    request.title = doc.data().title;
    request.description = doc.data().description;
    request.created = doc.data().created.toDate();

    this.requests.push(request);
  }

  ngOnInit() {}
}
