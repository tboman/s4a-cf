import { Component, VERSION as angularVer} from '@angular/core';
import { VERSION as materialVer } from '@angular/material';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  getVersions(): string {
    console.log(materialVer.full);
    return `Angular: ${angularVer.full}\nAngular Material: ${materialVer.full}`
  }
}