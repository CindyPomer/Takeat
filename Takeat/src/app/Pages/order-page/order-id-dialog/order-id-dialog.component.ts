import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Inject } from '@angular/core';

import { FoodItem } from '../../../models';

@Component({
  selector: "app-order-id-dialog",
  templateUrl: "./order-id-dialog.component.html",
  styleUrls: ["./order-id-dialog.component.css"],
})

export class OrderIdDialogComponent implements OnInit {
  id:string;

  
  constructor(
    private dialogRef: MatDialogRef<OrderIdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.id = this.data.id;
  }

  close() {
    
    this.dialogRef.close();
}
}
