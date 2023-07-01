import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, ListGroup } from 'react-bootstrap';

const RecipeList = ({ recipes, deleteRecipe }) => {
    return (
        <Container>
            <h1>Recipe Organizer</h1>
            <Link to="/add-recipe" className="btn btn-primary mb-3">Add Recipe</Link>
            <ListGroup>
                {recipes.map((recipe) => (
                    <ListGroup.Item key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        <Button variant="danger" className="ml-2" onClick={() => deleteRecipe(recipe.id)}>Delete</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default RecipeList;