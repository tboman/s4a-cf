import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { PublicComponent } from "./public.component";
import { LogoutComponent } from "./logout/logout.component";
import { AboutComponent } from "./about.component";
import { OfferComponent } from "./offer/offer.component";
import { RequestComponent } from "./request/request.component";
import { AppRouting } from "../app.routing";
import { MaterialModule } from "./material.module";
import { GuidesModule } from "./guides.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InputComponent } from "./input.component";

import { AuthGuard } from "../services/auth-guard.service";
import { AuthService } from "../services/auth.service";
import { environment } from "../environments/environments";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import "hammerjs";
import * as Firebase from 'firebase';
import { CacheService } from "../services/cache.service";
import { OffersComponent } from "./admin/offers/offers.component";
import { RequestsComponent } from "./admin/requests/requests.component";
import { MatchingComponent } from "./admin/matching/matching.component";
import { FieldsComponent } from "./admin/fields/fields.component";

/**
 * NgModule that includes all Material modules that are required to serve
 * the Plunker.
 */
Firebase.initializeApp(environment.firebase);

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRouting,
    GuidesModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(
      environment.firebase,
      "angular-auth-firebase"
    ),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [AppComponent, AboutComponent, PublicComponent, HomeComponent, LogoutComponent, OfferComponent, RequestComponent, OffersComponent, RequestsComponent, MatchingComponent, InterestsComponent, FieldsComponent],
  providers: [AuthGuard, [AuthService], CacheService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
