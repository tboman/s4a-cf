import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  animations: [
        trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-20%)', opacity: 0}),
          animate('250ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('250ms', style({transform: 'translateY(-20%)', opacity: 0}))
        ])
      ]
    )]
})
export class AppComponent implements OnInit {
  guideLinks: Guides[];
  isToggledUppercase: boolean = false;
  hideComponents: boolean = false;
  hideGuides: boolean = false;
  hideCDK: boolean = false;
  title: string;
  constructor(private breakObserver: BreakpointObserver){}
  get isMobile() {
    if (this.breakObserver.isMatched('(max-width: 599px)')) {
      return true;
    } else {
      return false;
    }
  }
  changeTitle(title: string) {
    this.title = title;
  }
  toggleGuides() {
    this.hideGuides = !this.hideGuides;
  }
  toggleComponents() {
    this.hideComponents = !this.hideComponents;
  }
  toggleUppercase() {
    this.isToggledUppercase = !this.isToggledUppercase;
    if (this.isToggledUppercase) {
      document.body.classList.add('button-uppercase');
      window.localStorage.setItem('isToggledUppercase', JSON.stringify(true));
    } else {
      document.body.classList.remove('button-uppercase');
      window.localStorage.setItem('isToggledUppercase', JSON.stringify(false));
    }
  }
  ngOnInit() {
    if (document.body.classList.contains('button-uppercase')) {
      this.isToggledUppercase = true;
    } else if (window.localStorage.getItem('isToggledUppercase')) {
      this.isToggledUppercase = JSON.parse(window.localStorage.getItem('isToggledUppercase'));
    }
    this.guideLinks = [
      { name: "Requests", url: "africa-guide"},
      { name: "Offers", url: "west-guide"}
    ];
  }
}

interface Guides {
  url: string;
  name: string;
}
interface Settings {
  isToggledUppercase?: boolean;
  customTheme?: boolean;
  showBackToDocs?: boolean;
}