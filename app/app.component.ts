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
  exampleLinks: ExampleLinks[];
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
      { name: "Getting started", url: "getting-started"}
    ];
    this.exampleLinks = [
      {
        category: "Button", url: "button", examples: [
          { name: "Button overview", url: "button-overview" },
          { name: "Button disableRipple", url: "button-noripple" },
          { name: "Button types", url: "button-types" }
        ]
      },
      {
        category: "Button toggle", url: "button-toggle", examples: [
          { name: "Button toggle overview", url: "button-toggle-overview" },
          { name: "Exclusive button toggle", url: "button-toggle-exclusive" }
        ]
      },
      {
        category: "Checkbox", url: "checkbox", examples: [
          { name: "Checkbox overview", url: "checkbox-overview" },
          { name: "Checkbox configuration", url: "checkbox-configurable" },
          { name: "Pseudo checkboxes", url: "pseudo-checkbox" }
        ]
      },
      {
        category: "Datepicker", url: "datepicker", examples: [
          { name: "Datepicker overview", url: "datepicker-overview" },
          { name: "Datepicker API", url: "datepicker-api" },
          { name: "Datepicker filter validation", url: "datepicker-filter" },
          { name: "Datepicker min-max filter validation", url: "datepicker-min-max" },
          { name: "Datepicker with startAt", url: "datepicker-startat" },
          { name: "Datepicker with touch UI", url: "datepicker-touchui" }
        ]
      },
      {
        category: "Dialog", url: "dialog", examples: [
          { name: "Dialog with result", url: "dialog-result" },
          { name: "Dialog configuration", url: "dialog-configurable" }
        ]
      },
      {
        category: "Expansion", url: "expansion", examples: [
          { name: "Expansion overview", url: "expansion-overview" }, 
          { name: "Multi expansion", url: "multi-expansion"}
        ]
      },
      {
        category: "Form Field", url: "form-field", examples: [
          { name: "Simple form field", url: "simple-form-field" },
          { name: "Form fields in a form", url: "form-field-in-a-form" }
        ]
      },
      {
        category: "Icon", url: "icon", examples: [
          { name: "Icon overview", url: "icon-overview" },
          { name: "Icon button", url: "icon-button" },
          { name: "Icon SVG", url: "icon-svg" }
        ]
      },
      {
        category: "List", url: "list", examples: [
          { name: "List overview", url: "list-overview" },
          { name: "Navigation list", url: "list-nav" },
          { name: "Selection list", url: "list-selection" },
          { name: "Advanced list", url: "list-advanced" }
        ]
      },
      {
        category: "Menu", url: "menu", examples: [
          { name: "Menu overview", url: "menu-overview" },
          { name: "Nested menu", url: "menu-nested" },
          { name: "Icon menu", url: "menu-icon" }
        ]
      },
      {
        category: "Misc", url: "misc", examples: [
          { name: "Onboarding overview", url: "onboarding/onboarding-overview" }
        ]
      },
      {
        category: "Ripple", url: "ripple", examples: [
          { name: "Ripple overview", url: "ripple-overview" }
        ]
      },
      {
        category: "Slide togle", url: "slide-toggle", examples: [
          { name: "Slide toggle overview", url: "slide-toggle-overview" },
          { name: "Slide toggle configuration", url: "slide-toggle-configurable" }
        ]
      },
      {
        category: "Snack Bar", url: "snack-bar", examples: [
          { name: "Snack Bar overview", url: "snack-bar-overview" },
          { name: "Snack Bar configuration", url: "snack-bar-configurable" }
        ]
      },
      {
        category: "Tooltip", url: "tooltip", examples: [
          { name: "Tooltip overview", url: "tooltip-overview" },
          { name: "Tooltip configuration", url: "tooltip-configurable" }
        ]
      }
    ]
  }
}

interface ExampleLinks {
  category: string;
  url: string;
  examples: Examples[];
}
interface Examples {
  name: string;
  url: string;
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