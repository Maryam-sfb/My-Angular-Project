import {IngredientModel} from "../Shared/ingredient.model";

export class RecipeModel {
  public name : string;
  public description: string;
  public ImagePath : string;
  public ingredients:IngredientModel[];

  constructor(name: string, desc: string, imagepath:string, ingrdnt:IngredientModel[]) {
    this.name = name;
    this.description = desc;
    this.ImagePath = imagepath;
    this.ingredients = ingrdnt;
  }
}
