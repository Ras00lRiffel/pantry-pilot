import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";
import type { Recipe } from "../types/recipe";

export default function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      loadRecipe();
    }
  }, [id]);

  async function loadRecipe() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/api/recipes/${id}/details`);

      setRecipe(response.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load recipe.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading recipe...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!recipe) {
    return <h2>Recipe not found.</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1>{recipe.name}</h1>

      <p>{recipe.description}</p>

      <hr />

      <h2>Recipe Information</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <div>
          <strong>Meal Type</strong>
          <p>{recipe.meal_type}</p>
        </div>

        <div>
          <strong>Cuisine</strong>
          <p>{recipe.cuisine}</p>
        </div>

        <div>
          <strong>Difficulty</strong>
          <p>{recipe.difficulty}</p>
        </div>

        <div>
          <strong>Health Score</strong>
          <p>{recipe.health_score}/100</p>
        </div>

        <div>
          <strong>Calories</strong>
          <p>{recipe.calories}</p>
        </div>

        <div>
          <strong>Calories Per Serving</strong>
          <p>{recipe.calories_per_serving}</p>
        </div>

        <div>
          <strong>Prep Time</strong>
          <p>{recipe.prep_time_minutes} min</p>
        </div>

        <div>
          <strong>Cook Time</strong>
          <p>{recipe.cook_time_minutes} min</p>
        </div>

        <div>
          <strong>Total Time</strong>
          <p>{recipe.total_time_minutes} min</p>
        </div>

        <div>
          <strong>Servings</strong>
          <p>{recipe.base_servings}</p>
        </div>
      </div>

      <hr />

      <h2>Ingredients</h2>

      {recipe.ingredients.length === 0 ? (
        <p>No ingredients linked yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th align="left">Ingredient</th>
              <th align="left">Category</th>
              <th align="left">Quantity</th>
              <th align="left">Unit</th>
            </tr>
          </thead>

          <tbody>
            {recipe.ingredients.map((ingredient) => (
              <tr key={ingredient.ingredient_id}>
                <td>{ingredient.ingredient_name}</td>
                <td>{ingredient.category}</td>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
