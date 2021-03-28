import foodsImg from '../../assets/foods.jpg';
import { useRecipes } from '../../hooks/useRecipes';
import { IRecipe } from '../../interfaces/IRecipe';
import { Container } from './styles';

interface RecipeCardProps {
  recipe: IRecipe;
  onOpenRecipeModal: () => void;
}

export function RecipeCard({ recipe, onOpenRecipeModal }: RecipeCardProps) {
  const { selectRecipe } = useRecipes();
  return (
    <Container>
      <p>{recipe.title}</p>
      <img src={foodsImg} alt="foods" />
      <button
        onClick={() => {
          onOpenRecipeModal();
          selectRecipe(recipe);
        }}
      >
        Ver Mais
      </button>
    </Container>
  );
}
