import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Menu, Order } from '../../models';
import { ServerAccessService } from '../../services/server-access/server-access.service';

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
  getUser():string
  {
    return window.sessionStorage.getItem("UserName");
  }
}
