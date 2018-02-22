import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../../rxjs';

import { Menu } from '../../models/menu.model';

@Injectable()
export class ServerAccessService {
  constructor(private http: HttpClient) { }

  public getMenu$(): Observable<Menu> {
    return this.http.get("../../../assets/mockup/menu.json").map(response => {
      const menu: Menu = <Menu>response;
      return menu;
    });
  }
}
