import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Kitchen } from '../../models/kitchen.model';
import { ServerAccessService } from '../../services/server-access/server-access.service';

@Component({
  selector: "app-kitchen-page",
  templateUrl: "./kitchen-page.component.html",
  styleUrls: ["./kitchen-page.component.css"]
})
export class KitchenPageComponent implements OnInit {
  currentOrder$: Observable<Kitchen> = null;
  constructor(private serverAccessService: ServerAccessService,private router: Router) {}

  ngOnInit() {
    this.getNextOrder(null);
  }

  getNextOrder(id) {
    this.currentOrder$ = this.serverAccessService.orderDone$(id);

    //if(!this.currentOrder$){
    //  this.router.navigate(['/finishKitchen']);
    //}
  }
}
