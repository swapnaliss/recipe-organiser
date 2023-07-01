import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


const RecipeDetail = ({ recipes, deleteRecipe }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe = recipes.find((recipe) => recipe.id === id);

    const handleDelete = () => {
        deleteRecipe(recipe.id);
        navigate('/');
    };

    if (!recipe) {
        return <div>Recipe not found.</div>;
    }

    return (
        <Container>
            <h2>{recipe.name}</h2>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Instructions: {recipe.instructions}</p>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Container>
    );
};

export default RecipeDetail;