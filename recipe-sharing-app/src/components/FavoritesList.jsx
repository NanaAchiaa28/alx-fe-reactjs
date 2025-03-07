import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore(state => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite
  }));

  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
