import { FoodItem } from './../../models/food-item.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { Menu, Order, User } from '../../models';
import { ServerAccessService } from '../../services/server-access/server-access.service';
import { userNameSessionKey } from '../../models/global-consts';
import { OrderIdDialogComponent } from './order-id-dialog/order-id-dialog.component';


@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"]
})
export class OrderPageComponent implements OnInit {
  menu: Menu;
  order: Order;
  user = '';
  constructor(private serverAccessService: ServerAccessService, private dialog: MatDialog) { }

  ngOnInit() {
    this.menu = this.serverAccessService.getMenuIngredients()
    .subscribe(response => {
      // console.log(response);
      // return response;

    this.menu = response;
    this.user = this.getUser();
    this.order = new Order();
    this.order.user = new User();
    this.order.user.userName = this.user;
  });
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '200px';
    
    this.order.orderSubmitTime = new Date(Date.now());
    // console.log(JSON.stringify(this.order));
    this.serverAccessService.submitOrder(this.order)
      .subscribe(response => {
      //  console.log(response);
      //alert(response);
      
    console.log(this.order);
    console.log(JSON.stringify(this.order));
    
    dialogConfig.data = {
      id: response,
    };
    let dialogRef = this.dialog.open(OrderIdDialogComponent, dialogConfig);
  });
  }
}
