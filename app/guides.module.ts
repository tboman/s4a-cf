import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { WestGuide } from './west';
import { AfricaGuide } from './africa';

@NgModule({
  declarations: [
    AfricaGuide, WestGuide
  ],
    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    AfricaGuide, WestGuide
  ]
})
export class GuidesModule {}