import { IIngredient } from './../../interfaces/IIngredient';

interface IngredientsTableProps {
  ingredients: IIngredient[];
}

export function IngredientsTable({ ingredients }: IngredientsTableProps) {
  return (
    <table>
      <tr>
        <th>Nome</th>
        <th>Quantidade</th>
        <th>Medida</th>
      </tr>
      {ingredients.map((ingredient) => {
        return (
          <tr>
            <td>{ingredient.name}</td>
            <td>{ingredient.amount}</td>
            <td>{ingredient.measure}</td>
          </tr>
        );
      })}
    </table>
  );
}
