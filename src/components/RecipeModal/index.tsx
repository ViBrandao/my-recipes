import Modal from 'react-modal';
import { useRecipes } from '../../hooks/useRecipes';
import { DirectionsTable } from '../DirectionsTable';
import { IngredientsTable } from '../IngredientsTable';
import { Container } from './styles';

interface RecipenModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RecipeModal({ isOpen, onRequestClose }: RecipenModalProps) {
  const { selectedRecipe } = useRecipes();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      ></button>
      <Container>
        <strong>{selectedRecipe.title}</strong>
        <strong>{selectedRecipe.category}</strong>
        <strong>Ingredientes</strong>
        <IngredientsTable ingredients={selectedRecipe.ingredients} />
        <strong>Modo de Preparo</strong>
        <DirectionsTable directions={selectedRecipe.directions} />
      </Container>
    </Modal>
  );
}
