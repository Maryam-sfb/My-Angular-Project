import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../Shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private SLservice:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem() {
    const IngName = this.nameInputRef.nativeElement.value;
    const IngAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(IngName, IngAmount);
    this.SLservice.addIngredient(newIngredient);
  }

}
