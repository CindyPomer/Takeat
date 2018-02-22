import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FoodItem } from "../../../models/food-item.model";

@Component({
  selector: "app-food-selector",
  templateUrl: "./food-selector.component.html",
  styleUrls: ["./food-selector.component.css"]
})
export class FoodSelectorComponent implements OnInit {
  @Input() foodsToDisplay: FoodItem[];
  @Input() isMulty = false;
  @Input() foodTitle: string;
  @Output() itemSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendSelectedItem(id) {
    this.itemSelected.emit(id);
  }
}
