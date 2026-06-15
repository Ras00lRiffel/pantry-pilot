import { Link } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipes";

export default function Recipes() {
  const { recipes, loading } = useRecipes();

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
        }}
      >
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
