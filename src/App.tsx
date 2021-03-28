import { Header } from './components/Header';
import { RecipesContainer } from './components/RecipesContainer';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewRecipeModal } from './components/NewRecipeModal';
import React, { useState } from 'react';
import { RecipesProvider } from './hooks/useRecipes';
import { RecipeModal } from './components/RecipeModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewRecipeModalOpen, setIsNewRecipeModalOpen] = useState(false);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  function handleOpenNewRecipeModal() {
    setIsNewRecipeModalOpen(true);
  }

  function handleCloseNewRecipeModal() {
    setIsNewRecipeModalOpen(false);
  }

  function handleOpenRecipeModal() {
    setIsRecipeModalOpen(true);
  }

  function handleCloseRecipeModal() {
    setIsRecipeModalOpen(false);
  }

  return (
    <RecipesProvider>
      <Header onOpenNewRecipeModal={handleOpenNewRecipeModal} />
      <RecipesContainer onOpenRecipeModal={handleOpenRecipeModal} />
      <NewRecipeModal
        isOpen={isNewRecipeModalOpen}
        onRequestClose={handleCloseNewRecipeModal}
      />
      <RecipeModal
        isOpen={isRecipeModalOpen}
        onRequestClose={handleCloseRecipeModal}
      />
      <GlobalStyle />
    </RecipesProvider>
  );
}
