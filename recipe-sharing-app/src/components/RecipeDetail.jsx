import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
