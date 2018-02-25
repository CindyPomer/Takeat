import { Component, OnInit, Input } from '@angular/core';
import { IngredientsSum } from '../../../models/ingredients-sum.model';

@Component({
  selector: 'app-ingredients-sums',
  templateUrl: './ingredients-sums.component.html',
  styleUrls: ['./ingredients-sums.component.css']
})
export class IngredientsSumsPageComponent implements OnInit {

  @Input() ingredientsSum : IngredientsSum;

  constructor() { }

  ngOnInit() {
  
  }

}
