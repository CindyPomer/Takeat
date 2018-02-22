import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FoodItem } from '../../../models';

@Component({
  selector: "app-food-selector",
  templateUrl: "./food-selector.component.html",
  styleUrls: ["./food-selector.component.css"]
})
export class FoodSelectorComponent implements OnInit {
  @Input() foodsToDisplay: FoodItem[];
  @Input() isMulty = false;
  @Input() foodTitle: string;
  @Output() changed = new EventEmitter<string[]>();

  selectedIds: string[] = [];
  constructor() {}

  ngOnInit() {}

  sendSelectedItem(e) {
    const id = e.srcElement.id;
    if (!this.isMulty) {
      this.selectedIds[0] = id;
    } else {
      if (e.srcElement.checked) {
        this.selectedIds[id] = id;
      } else {
        delete this.selectedIds[id];
      }
    }
    this.changed.emit(this.selectedIds);
  }
}
