import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';

const RecipeForm = ({ addRecipe }) => {
    const [recipe, setRecipe] = useState({
        name: '',
        cuisine: '',
        ingredients: '',
        instructions: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            ...recipe,
            id: Math.random().toString(36).substring(7),
            ingredients: recipe.ingredients.split(',').map((ingredient) => ingredient.trim()),
        };
        addRecipe(newRecipe);
        navigate('/');
    };

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <h2>Add Recipe</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={recipe.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cuisine:</Form.Label>
                    <Form.Control type="text" name="cuisine" value={recipe.cuisine} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ingredients:</Form.Label>
                    <Form.Control type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Instructions:</Form.Label>
                    <Form.Control as="textarea" name="instructions" value={recipe.instructions} onChange={handleChange} />
                </Form.Group>
                <Button type="submit">Add</Button>
            </Form>
        </Container>
    );
};

export default RecipeForm;