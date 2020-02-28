import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material';
@Component({
    selector: 'selection-list-example',
    templateUrl: 'selection-list.html'
})
export class SelectionListExample {
  @ViewChild('fruits') fruits: MatSelectionList;
	typeOfFruits = ['Apples', 'Oranges', 'Grapefruits', 'Bananas', 'Cherries'];

  disableItem2: boolean = false;
  stats: boolean = false;
  selectedItem4: boolean = false;

  selectAll() {
      this.fruits.selectAll();
  }
  deselectAll() {
    this.fruits.deselectAll();
  }
}