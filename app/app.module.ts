import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent, ConfirmGoBackDialog } from './home.component';
import { AboutComponent } from './about.component';
import { AppRouting } from '../app.routing';
import { ExampleModule } from './example.module';
import { MaterialModule } from './material.module';
import { GuidesModule } from './guides.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
/**
 * NgModule that includes all Material modules that are required to serve 
 * the Plunker.
 */

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRouting,
    ExampleModule,
    GuidesModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ConfirmGoBackDialog
   ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmGoBackDialog
  ]
})
export class AppModule { }

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */