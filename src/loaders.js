import {baseUrl} from "./base_url";

export const recipesLoader = async () => {
    const response = await fetch(`${baseUrl}/recipes`);
    const recipes = await response.json();
    return recipes;
};

export const recipeLoader = async ({params}) => {
    const id = params.id;
    const response = await fetch(`${baseUrl}/recipes/${id}`);
    const recipe = await response.json();
    return recipe;
}