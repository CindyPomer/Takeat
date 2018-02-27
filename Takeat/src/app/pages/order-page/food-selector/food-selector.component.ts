import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { FoodItem } from "../../../models";

@Component({
  selector: "app-food-selector",
  templateUrl: "./food-selector.component.html",
  styleUrls: ["./food-selector.component.css"]
})
export class FoodSelectorComponent implements OnInit {
  @Input() foodsToDisplay: FoodItem[];
  @Input() isMulty = false;
  @Input() foodTitle: string;
  @Output() changed = new EventEmitter<FoodItem[]>();

  selectedIds: FoodItem[] = [];
  constructor() {}

  ngOnInit() {}

  sendSelectedItem(e) {
    const food: FoodItem = this.getFoodById(e.srcElement.id);
    if (!this.isMulty) {
      this.selectedIds[0] = food;
    } else {
      if (e.srcElement.checked) {
        this.selectedIds[food.id] = food;
      } else {
        delete this.selectedIds[food.id];
      }
    }
    this.changed.emit(this.selectedIds);
  }

  getImagePath(imgName) {
    const fullPath = 'url("/assets/images/food_images/' + imgName + '")';
    return fullPath.toString();
  }

  private getFoodById(id) {
    return this.foodsToDisplay.find(item => {
      return item.id === +id;
    });
  }
}
