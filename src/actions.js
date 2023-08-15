import {redirect} from "react-router-dom"
import {baseUrl} from "./base_url"

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newRecipe = {
        title: formData.get("title"),
        ingredients: formData.get("ingredients"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        category: formData.get("category"),
    }
    await fetch(`${baseUrl}/recipes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
    })
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updatedRecipe = {
        title: formData.get("title"),
        ingredients: formData.get("ingredients"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        category: formData.get("category"),
    }
    await fetch(`${baseUrl}/recipes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
    })
    return redirect("/")
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${baseUrl}/recipes/${id}`, {
        method: "DELETE",
    })
    return redirect("/")
}