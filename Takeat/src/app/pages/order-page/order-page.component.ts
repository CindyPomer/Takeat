import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../../models/food-item.model";
import { ServerAccessService } from "../../services/server-access/server-access.service";
import { Subscription } from "rxjs/Subscription";
import { Menu } from "../../models/menu.model";

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"]
})
export class OrderPageComponent implements OnInit {
  menu$;
  constructor(private serverAccessService: ServerAccessService) {}

  ngOnInit() {
    this.menu$ = this.serverAccessService.getMenu$();
  }

  breadSelected(selected) {
    console.log('bread:', selected);
  }
  saladSelected(selected) {
    console.log('salad:', selected);
  }
  mainCourseSelected(selected) {
    console.log('main:', selected);
  }
}
