import { Router } from "express";
import * as recipeController from "../controllers/recipe.controller";

const router = Router();

router.get("/", recipeController.getRecipes);
router.get("/:id", recipeController.getRecipeById);

router.post("/", recipeController.createRecipe);

router.put("/:id", recipeController.updateRecipe);

router.delete("/:id", recipeController.deleteRecipe);

router.get("/search", recipeController.searchRecipes);

router.get("/filter", recipeController.filterRecipes);

router.get("/:id/details", recipeController.getRecipeDetails);

router.post(
  "/:id/ingredients",
  recipeController.addIngredientToRecipe
);

router.put(
  "/:recipeId/ingredients/:ingredientId",
  recipeController.updateRecipeIngredient
);

router.delete(
  "/:recipeId/ingredients/:ingredientId",
  recipeController.removeRecipeIngredient
);

export default router;