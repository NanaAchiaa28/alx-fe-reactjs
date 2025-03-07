import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm"; 
import RecipeDetail from "./components/RecipeDetail"; // ✅ Import RecipeDetail
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} /> 
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* ✅ Added RecipeDetail route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
