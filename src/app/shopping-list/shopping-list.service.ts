import { Injectable } from '@angular/core';
import {IngredientModel} from "../Shared/ingredient.model";
import {RecipeService} from "../recipes/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() { }
  private ingredients: IngredientModel[] =[];
  getIngredients() {
    return this.ingredients;
  }
  addIngredient(ingredient:IngredientModel) {
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: IngredientModel[]) {
  this.ingredients.push(...ingredients);
 }
}
