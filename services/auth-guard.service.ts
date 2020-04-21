import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.signInWithPopup();
  }
}
