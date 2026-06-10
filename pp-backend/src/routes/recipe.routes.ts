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

export default router;