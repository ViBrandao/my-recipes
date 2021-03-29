import Modal from 'react-modal';
import { DirectionInput } from '../DirectionInput';
import { DirectionsTable } from '../DirectionsTable';
import { Container } from './styles';
import { FormEvent, useState } from 'react';
import { IDirection } from '../../interfaces/IDirections';
import { IngredientInput } from '../IngredientInput';
import { IIngredient } from './../../interfaces/IIngredient';
import { IngredientsTable } from '../IngredientsTable';
import { useRecipes } from '../../hooks/useRecipes';
interface NewRecipenModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRecipeModal({
  isOpen,
  onRequestClose,
}: NewRecipenModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Salgado');
  const [directions, setDirections] = useState<IDirection[]>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const { createRecipe } = useRecipes();

  async function handleCreateNewRecipe(event: FormEvent) {
    event.preventDefault();

    await createRecipe({
      title: title,
      category: category,
      ingredients: ingredients,
      directions: directions,
    });

    handleRequestClose();
  }

  async function handleRequestClose() {
    setTitle('');
    setCategory('Salgado');
    setDirections([]);
    setIngredients([]);

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleRequestClose}
        className="react-modal-close"
      ></button>
      <Container onSubmit={handleCreateNewRecipe}>
        <strong>Nova Receita</strong>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <strong>Categoria</strong>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Salgado">Salgado</option>
          <option value="Doce">Doce</option>
        </select>
        <strong>Modo de Preparo</strong>
        <DirectionInput directions={directions} setDirections={setDirections} />
        <DirectionsTable directions={directions} />
        <strong>Ingredients</strong>
        <IngredientInput
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <IngredientsTable ingredients={ingredients} />
        <button type="submit">Adicionar</button>
      </Container>
    </Modal>
  );
}
