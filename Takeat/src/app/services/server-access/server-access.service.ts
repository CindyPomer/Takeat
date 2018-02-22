import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerAccessService {

  constructor(private http: HttpClient) { }

  public getMenu(): Observable<any> {
    return this.http.get("../../../assets/mockup/menu.json");

}

}
