import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../../rxjs';

import { Menu } from '../../models/menu.model';
import { Order } from '../../models';
import { Kitchen } from '../../models/kitchen.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content':"application/json",
    'content-type':"application/x-www-form-urlencoded"
  })
};

@Injectable()
export class ServerAccessService {
  constructor(private http: HttpClient) {}

  public getMenuIngredients(): Observable<Menu> {
    return this.http.get('/api/getMenuIngredients/').map(response => {
      const menu: Menu = <Menu>response;
      return menu;
    });
  }

  public getNextOrder$(): Observable<Kitchen> {
   return this.http.get('../../../assets/mockup/kitchen.json').map(response => {
    const kitchen: Kitchen = <Kitchen>response;
    return kitchen;
  });
  }

  public submitOrder(order: Order): Observable<number>
  {
     return this.http.post('/api/submitOrder/', order , httpOptions).map(response => {
      const id: number = <number>response;
      return id;
  });
}
}
