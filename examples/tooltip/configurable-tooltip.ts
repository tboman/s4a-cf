import { Component, ViewEncapsulation } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'configurable-tooltip-example',
  templateUrl: 'configurable-tooltip.html',
  styleUrls: ['configurable-tooltip.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurableTooltipExample {
  positions = [
    { val: 'above', displayVal: 'Above' },
    { val: 'below', displayVal: 'Below' },
    { val: 'left', displayVal: 'Left' },
    { val: 'right', displayVal: 'Right' },
    { val: 'before', displayVal: 'Before' },
    { val: 'after', displayVal: 'After' }
  ]
  tooltipPosition: string = 'above';
  tooltipContent: string = 'tooltip';
  tooltipDisabled: boolean = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  classNames: string[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.classNames.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(className: string): void {
    const index = this.classNames.indexOf(className);

    if (index >= 0) {
      this.classNames.splice(index, 1);
    }
  }
}