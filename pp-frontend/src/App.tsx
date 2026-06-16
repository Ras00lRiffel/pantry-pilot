import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Dashboard";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Ingredients from "./pages/Ingredients";
import Pantry from "./pages/Pantry";
import MealPlans from "./pages/MealPlans";
import GroceryLists from "./pages/GroceryLists";
import Settings from "./pages/Settings";
import RecipeForm from "./pages/RecipesForm";
import RecipeEdit from "./pages/RecipesEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="text-red-500 text-2xl font-bold">Tailwind is working</div>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          <Route path="/ingredients" element={<Ingredients />} />

          <Route path="/pantry" element={<Pantry />} />

          <Route path="/meal-plans" element={<MealPlans />} />

          <Route path="/grocery-lists" element={<GroceryLists />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/recipes/new" element={<RecipeForm />} />
          <Route path="/recipes/:id/edit" element={<RecipeEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
