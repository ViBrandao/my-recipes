import { useRecipes } from '../../hooks/useRecipes';
import { RecipeCard } from '../RecipeCard';
import { Container } from './styles';

interface RecipesContainerProps {
  onOpenRecipeModal: () => void;
}

export function RecipesContainer({ onOpenRecipeModal }: RecipesContainerProps) {
  const { recipes } = useRecipes();
  console.log(recipes);
  return (
    <Container>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onOpenRecipeModal={onOpenRecipeModal}
        />
      ))}
    </Container>
  );
}
