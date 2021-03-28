import { IDirection } from './IDirections';
import { IIngredient } from './IIngredient';

export interface IRecipe {
  id: number;
  title: string;
  category: string;
  ingredients: IIngredient[];
  directions: IDirection[];
  createdAt: string;
}
