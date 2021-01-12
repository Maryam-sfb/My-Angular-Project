import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../Shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];
  constructor(private SLService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.SLService.getIngredients();
  }
}
