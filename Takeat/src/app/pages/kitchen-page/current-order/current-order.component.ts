import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Order } from '../../../models';

@Component({
  selector: "app-current-order",
  templateUrl: "./current-order.component.html",
  styleUrls: ["./current-order.component.css"]
})
export class CurrentOrderComponent implements OnInit {
  @Input() currentOrder: Order;
  @Output() doneClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }
}
