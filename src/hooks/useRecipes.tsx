import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IRecipe } from '../interfaces/IRecipe';
import { api } from '../services/api';

type RecipeInput = Omit<IRecipe, 'id' | 'createdAt'>;

interface RecipesProviderProps {
  children: ReactNode;
}

interface RecipesContextData {
  recipes: IRecipe[];
  selectedRecipe: IRecipe;
  createRecipe: (Recipe: RecipeInput) => Promise<void>;
  selectRecipe: (Recipe: IRecipe) => void;
}

const RecipesContext = createContext<RecipesContextData>(
  {} as RecipesContextData
);

export function RecipesProvider({ children }: RecipesProviderProps) {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe>(Object);

  useEffect(() => {
    api.get('recipes').then((response) => setRecipes(response.data.recipes));
  }, []);

  async function createRecipe(recipeInput: RecipeInput) {
    const response = await api.post('/recipes', {
      ...recipeInput,
      createdAt: new Date(),
    });
    const { recipe } = response.data;

    setRecipes([...recipes, recipe]);
  }

  function selectRecipe(recipe: IRecipe) {
    setSelectedRecipe(recipe);
  }

  return (
    <RecipesContext.Provider
      value={{ recipes, selectedRecipe, createRecipe, selectRecipe }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipesContext);
  return context;
}
