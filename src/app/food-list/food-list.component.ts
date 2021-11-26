import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodList: Food[] = [
    new Food('Carne', 1),
    new Food('Arroz', 1),
    new Food('Feijão', 1),
    new Food('Couve Refogada', 1),
  ];

  constructor() {}

  ngOnInit(): void {}
}
