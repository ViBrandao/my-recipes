import { Container } from './styles';

interface HeaderProps {
  onOpenNewRecipeModal: () => void;
}

export function Header({ onOpenNewRecipeModal }: HeaderProps) {
  return (
    <Container>
      <h1>Minhas Receitas</h1>
      <button type="button" onClick={onOpenNewRecipeModal}>
        Adicionar Receita
      </button>
    </Container>
  );
}
