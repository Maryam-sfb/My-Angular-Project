import { Injectable } from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {IngredientModel} from "../Shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  constructor(private SLService:ShoppingListService) { }

   private recipes : RecipeModel[] =[
    new RecipeModel('Steak',
      'Its my favourite meal!',
      'https://goodiegodmother.com/wp-content/uploads/2020/03/coca-cola-ham-recipe-in-the-slow-cooker-2-720x720.jpg',
      [new IngredientModel('meat',1),new IngredientModel('potato',3)]),
    new RecipeModel('Pizza',
      'Its Italian.',
      "https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/1418-3-large.jpg",
      [new IngredientModel('cheese',5), new IngredientModel('bread',1), new IngredientModel('beacon',2)])
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
   this.SLService.addIngredients(ingredients);
  }
}
