import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../../rxjs';

import { Menu } from '../../models/menu.model';
import { Order } from '../../models';

@Injectable()
export class ServerAccessService {
  constructor(private http: HttpClient) {}

  public getMenu$(): Observable<Menu> {
    return this.http.get('../../../assets/mockup/menu.json').map(response => {
      const menu: Menu = <Menu>response;
      return menu;
    });
  }

  public getNextOrder$(): Observable<Order> {
   return this.http.get('../../../assets/mockup/order.json').map(response => {
    const order: Order = <Order>response;
    return order;
  });
  }
}
