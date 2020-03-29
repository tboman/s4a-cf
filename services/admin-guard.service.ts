import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AdminGuard {

  constructor(private router: Router, private authService: AuthService) {}
  canActivate() {
    if (this.authService.isAdmin()) {
      return true;
    }
    this.authService.signInWithPopup();
  }

}