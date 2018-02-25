import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Menu, Order, User } from '../../models';
import { ServerAccessService } from '../../services/server-access/server-access.service';
import { userNameSessionKey } from '../../models/global-consts';

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"]
})
export class OrderPageComponent implements OnInit {
  menu$: Observable<Menu>;
  order: Order;
  user = '';
  constructor(private serverAccessService: ServerAccessService) { }

  ngOnInit() {
    this.menu$ = this.serverAccessService.getMenu$();
    this.user = this.getUser();
    this.order = new Order();
    this.order.user = new User();
    this.order.user.userName = this.user;
  }

  breadSelected(selected) {
    this.order.bread = selected[0];
  }
  saladSelected(selected) {
    this.order.salads = selected;
  }
  mainCourseSelected(selected) {
    this.order.mainCourse = selected[0];
  }
  getUser(): string {
    return window.sessionStorage.getItem(userNameSessionKey);
  }
  sendOrder() {
    this.order.orderSubmitTime = new Date(Date.now());
    console.log(JSON.stringify(this.order));
  }
}
