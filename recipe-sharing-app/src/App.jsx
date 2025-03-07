import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page listing all recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Route to view recipe details, using the recipe ID */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />

        {/* Route to edit an existing recipe */}
        <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
