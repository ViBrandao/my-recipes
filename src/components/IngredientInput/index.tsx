import { Container } from './styles';
import { FormEvent, useState } from 'react';
import { IIngredient } from '../../interfaces/IIngredient';

interface IngredientsProps {
  ingredients: IIngredient[];
  setIngredients: (ingredients: IIngredient[]) => void;
}

export function IngredientInput({
  ingredients,
  setIngredients,
}: IngredientsProps) {
  const [name, setName] = useState('');
  const [measure, setMeasure] = useState('Gramas');
  const [amount, setAmount] = useState(0);

  function handleCreateNewDirections(event: FormEvent) {
    event.preventDefault();
    let newIngredient: IIngredient;
    newIngredient = { name: name, amount: amount, measure: measure };
    setIngredients([...ingredients, newIngredient]);
    setName('');
    setMeasure('Gramas');
    setAmount(0);
  }

  return (
    <Container>
      <input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <select
        value={measure}
        onChange={(event) => setMeasure(event.target.value)}
      >
        <option value="Gramas">Gramas</option>
        <option value="Colher de Sopa">Colher de Sopa</option>
        <option value="Litros">Litros</option>
      </select>
      <button onClick={handleCreateNewDirections}>Adicionar</button>
    </Container>
  );
}
