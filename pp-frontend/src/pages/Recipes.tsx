import { Link, useNavigate } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipes";
import api from "../services/api";
import "../assets/styles/buttons.css";

async function deleteRecipe(id: number) {
  await api.delete(`/recipes/${id}`);
  window.location.reload();
}

export default function Recipes() {
  const { recipes, loading } = useRecipes();
  const navigate = useNavigate();

  if (loading) {
    return <h2>Loading recipes...</h2>;
  }

  return (
    <div>
      <h1>Recipes</h1>

      <p>{recipes.length} recipes found</p>

      <div
        style={{
          display: "grid",
          gap: "12px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <div
            style={{
              background: "white",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3>{recipe.name}</h3>

            <p>{recipe.description}</p>

            <small>
              {recipe.cuisine} • {recipe.calories} calories
            </small>
            <div className="btn-group">
              <Link to={`/recipes/${recipe.id}`}>
                <button className="btn btn-secondary">View</button>
              </Link>

              <Link to={`/recipes/${recipe.id}/edit`}>
                <button className="btn btn-secondary">Edit</button>
              </Link>

              <button
                className="btn btn-danger"
                onClick={() => deleteRecipe(recipe.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-group">
        <Link to="/recipes/new">
          <button className="btn btn-primary">+ New Recipe</button>
        </Link>
      </div>
    </div>
  );
}
