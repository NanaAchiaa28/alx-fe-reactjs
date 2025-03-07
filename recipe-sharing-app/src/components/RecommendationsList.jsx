import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations
  }));

  return (
    <div>
      <h2>Recommended for You</h2>
      <button onClick={generateRecommendations}>Generate Recommendations</button>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Click the button to generate some!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
