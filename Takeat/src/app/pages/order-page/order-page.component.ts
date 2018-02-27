import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Menu, Order, User } from '../../models';
import { userNameSessionKey } from '../../models/global-consts';
import { ServerAccessService } from '../../services/server-access/server-access.service';
import { OrderIdDialogComponent } from './order-id-dialog/order-id-dialog.component';

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"]
})
export class OrderPageComponent implements OnInit {
  menu$: Observable<Menu>;
  order: Order;
  user = "";
  constructor(
    private serverAccessService: ServerAccessService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.menu$ = this.serverAccessService.getMenuIngredients();

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
    const user = window.sessionStorage.getItem(userNameSessionKey);
    if (!user) {
      this.router.navigate(['/login']);
    }
    return user;
  }
  sendOrder() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    dialogConfig.height = "200px";

    this.order.orderSubmitTime = new Date(Date.now());
    // console.log(JSON.stringify(this.order));
    this.serverAccessService.submitOrder(this.order).subscribe(response => {
      //  console.log(response);
      //alert(response);
      console.log(this.order);
      console.log(JSON.stringify(this.order));

      dialogConfig.data = {
        id: response
      };
      const dialogRef = this.dialog.open(OrderIdDialogComponent, dialogConfig);

      this.router.navigate(['/finish']);
    });
  }
}
