import {Link, useLoaderData, Form } from "react-router-dom";

function Index(props){
    const recipes = useLoaderData();

    return (
        <div>
            <h1>Recipes</h1>
            <Form action="/create" method="post">
                <input type="text" name="title" placeholder="Recipe Title" />
                <input type="text" name="ingredients" placeholder="Ingredients" />
                <input type="text" name="instructions" placeholder="Instructions" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="text" name="category" placeholder="Category" />
                <input type="submit" value="Create Recipe" />
            </Form>
            {recipes.map((recipe, index) => {
                return (
                    <div key={recipe._id} className="recipe">
                        <Link to={`/${recipe._id}`}>
                            <h2>{recipe.title}</h2>
                        </Link>
                            <img src={recipe.image} alt={recipe.title} />
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.instructions}</p>
                            <p>{recipe.category}</p>
                    </div>
                )
            })}
            </div>
    );
}

export default Index;