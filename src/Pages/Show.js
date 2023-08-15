import {useLoaderData, Form } from "react-router-dom"

function Show(props){
    const recipe = useLoaderData()
    return (
        <div className="recipe">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title}/>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>{recipe.category}</p>

            <h2>Update {recipe.title}</h2>
            <Form action={`/update/${recipe.id}`} method="post">
                <input type="text" name="title" placeholder="Recipe Title" />
                <input type="text" name="ingredients" placeholder="Ingredients" />
                <input type="text" name="instructions" placeholder="Instructions" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="text" name="category" placeholder="Category" />
                <input type="submit" value={`update ${recipe.title}`} />
            </Form>
            <h2>Delete</h2>
            <Form action={`/delete/${recipe.id}`} method="post">
                <input type="submit" value={`delete ${recipe.title}`} />
            </Form>
        </div>
    )
        
}

export default Show