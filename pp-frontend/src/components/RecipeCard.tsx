import { Link } from "react-router-dom";
import type { Recipe } from "../types/recipe";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>

      <p className="text-gray-600 mb-4">{recipe.description}</p>

      <div className="flex justify-between mb-4 text-sm">
        <span>{recipe.cuisine}</span>
        <span>{recipe.calories} cal</span>
      </div>

      <div className="flex gap-2">
        <Link
          to={`/recipes/${recipe.id}`}
          className="bg-gray-200 px-3 py-2 rounded"
        >
          View
        </Link>

        <Link
          to={`/recipes/${recipe.id}/edit`}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
