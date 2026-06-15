import { useEffect, useState } from "react";
import api from "../services/api";
import type { Recipe } from "../types/recipe";

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      const response = await api.get("/api/recipes");

      setRecipes(response.data.data);
    } catch (error) {
      console.error("Failed to load recipes", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    recipes,
    loading,
    refreshRecipes: fetchRecipes,
  };
}