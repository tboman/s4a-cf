import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(private firebaseAuth: AngularFireAuth) {}

  ngOnInit() {
    localStorage.removeItem("user");
    if (this.firebaseAuth.auth.currentUser) {
      this.firebaseAuth.auth.signOut().then(() => {
        window.location.reload();
      });
    }
  }
}
