import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { Request } from "../../model/request";
import { CacheService } from "../../../services/cache.service";

@Component({
  selector: "requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"]
})
export class RequestsComponent implements OnInit {
  requests = [];
  interests;

  constructor(private cacheService: CacheService) {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection("requests")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.renderRequest(doc);
        });
      });

    this.interests = cacheService.getInterests();
  }

  ngOnInit() {}

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
}
