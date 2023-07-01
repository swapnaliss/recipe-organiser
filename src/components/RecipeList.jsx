import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form, Card } from 'react-bootstrap';

const RecipeList = ({ recipes, deleteRecipe }) => {
    const [searchCategory, setSearchCategory] = useState('name');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const handleSearchCategoryChange = (event) => {
        setSearchCategory(event.target.value);
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const filteredRecipes = recipes.filter((recipe) => {
            if (searchCategory === 'name') {
                return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
            }
            if (searchCategory === 'ingredients') {
                return recipe.ingredients.some((ingredient) =>
                    ingredient.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }
            if (searchCategory === 'cuisine') {
                return recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        });
        setFilteredRecipes(filteredRecipes);
    };

    const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

    return (
        <Container>
            <Form onSubmit={handleSearch}>
                <Form.Group>
                    <Form.Label>Search Category:</Form.Label>
                    <div>
                        <Form.Check
                            inline
                            type="radio"
                            label="Name"
                            name="searchCategory"
                            value="name"
                            checked={searchCategory === 'name'}
                            onChange={handleSearchCategoryChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Ingredients"
                            name="searchCategory"
                            value="ingredients"
                            checked={searchCategory === 'ingredients'}
                            onChange={handleSearchCategoryChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Cuisine"
                            name="searchCategory"
                            value="cuisine"
                            checked={searchCategory === 'cuisine'}
                            onChange={handleSearchCategoryChange}
                        />
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Search Query:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter search query"
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                    />
                </Form.Group>
                <Button type="submit">Search</Button>
            </Form>

            <h1>Recipe Organizer</h1>
            <Link to="/add-recipe" className="btn btn-primary mb-3">
                Add Recipe
            </Link>
            <div className="card-container">
                {displayRecipes.length === 0 ? (    
                    <p>No recipes found.</p>
                ) : (
                    displayRecipes.map((recipe) => (
                        <Card key={recipe.id} className="recipe-card">
                            <Card.Img variant="right" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>{recipe.cuisine}</Card.Text>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="float-right"
                                    onClick={() => deleteRecipe(recipe.id)}
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </div>
        </Container>
    );
};

export default RecipeList;
