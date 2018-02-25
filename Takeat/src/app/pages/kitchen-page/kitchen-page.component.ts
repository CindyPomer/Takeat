import { Component, OnInit } from "@angular/core";
import { ServerAccessService } from "../../services/server-access/server-access.service";
import { Order } from "../../models";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-kitchen-page",
  templateUrl: "./kitchen-page.component.html",
  styleUrls: ["./kitchen-page.component.css"]
})
export class KitchenPageComponent implements OnInit {
  currentOrder$: Observable<Order> = null;
  constructor(private serverAccessService: ServerAccessService) {}

  ngOnInit() {
    this.getNextOrder();
  }

  getNextOrder() {
    this.currentOrder$ = this.serverAccessService.getNextOrder$();
  }
}
