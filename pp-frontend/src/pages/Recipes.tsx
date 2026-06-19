import { Link } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipes";
import api from "../services/api";
import "../assets/styles/buttons.css";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import RecipeCard from "../components/RecipeCard";

async function deleteRecipe(id: number) {
  await api.delete(`/recipes/${id}`);
  window.location.reload();
}

export default function Recipes() {
  const { recipes, loading } = useRecipes();

  if (loading) {
    return <h2>Loading recipes...</h2>;
  }

  return (
    <Layout>
      <div>
        <PageHeader
          title="Recipes"
          action={
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              + New Recipe
            </button>
          }
        />

        <p>{recipes.length} recipes found</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
