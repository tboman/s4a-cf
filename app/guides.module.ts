import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ExampleModule } from './example.module';
import { GettingStartedGuide } from '../guides/africa';
import { WestSignup } from '../guides/signup-west';

@NgModule({
  declarations: [
    GettingStartedGuide
  ],
    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ExampleModule
  ],
  exports: [
    GettingStartedGuide
  ]
})
export class GuidesModule {}