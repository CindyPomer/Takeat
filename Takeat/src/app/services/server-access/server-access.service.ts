import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Menu } from "../../models/menu.model";
import "rxjs/add/operator/map";

@Injectable()
export class ServerAccessService {
  constructor(private http: HttpClient) {}

  public getMenu$(): Observable<Menu> {
    return this.http.get("../../../assets/mockup/menu.json").map(response => {
      const menu: Menu = <Menu>response;
      return menu;
    });
  }
}
