import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const recipesData = [
  {
    "id": "1",
    "name": "Spaghetti Bolognese",
    "cuisine": "Italian",
    "ingredients": [
      "spaghetti",
      "ground beef",
      "onion",
      "garlic",
      "tomato sauce",
      "tomato paste",
      "oregano",
      "basil",
      "salt",
      "pepper"
    ],
    "instructions": "1. Cook spaghetti according to package instructions. \n2. In a large skillet, brown ground beef, onion, and garlic. \n3. Add tomato sauce, tomato paste, oregano, basil, salt, and pepper. Simmer for 15 minutes. \n4. Serve the Bolognese sauce over cooked spaghetti."
  },
  {
    "id": "2",
    "name": "Chicken Curry",
    "cuisine": "Indian",
    "ingredients": [
      "chicken",
      "onion",
      "garlic",
      "ginger",
      "curry powder",
      "garam masala",
      "coconut milk",
      "tomatoes",
      "salt",
      "cilantro"
    ],
    "instructions": "1. Heat oil in a pan and sauté onion, garlic, and ginger. \n2. Add chicken pieces and cook until browned. \n3. Add curry powder, garam masala, coconut milk, and chopped tomatoes. \n4. Simmer for 20 minutes or until chicken is cooked through. \n5. Garnish with cilantro and serve with rice or naan."
  },
  {
    "id": "3",
    "name": "Caprese Salad",
    "cuisine": "Italian",
    "ingredients": [
      "tomatoes",
      "mozzarella cheese",
      "fresh basil",
      "olive oil",
      "balsamic vinegar",
      "salt",
      "pepper"
    ],
    "instructions": "1. Slice tomatoes and mozzarella cheese. \n2. Arrange tomato and mozzarella slices on a plate. \n3. Top with fresh basil leaves. \n4. Drizzle with olive oil and balsamic vinegar. \n5. Season with salt and pepper to taste."
  }
];

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />} />
          <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} deleteRecipe={deleteRecipe} />} />
          <Route path="/add-recipe" element={<RecipeForm addRecipe={addRecipe} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;