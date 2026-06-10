import { Router } from "express";
import * as ingredientController from "../controllers/ingredients.controller";

const router = Router();

router.get("/", ingredientController.getIngredients);
router.get("/search", ingredientController.searchIngredients);
router.get("/:id", ingredientController.getIngredientById);

router.post("/", ingredientController.createIngredient);
router.put("/:id", ingredientController.updateIngredient);
router.delete("/:id", ingredientController.deleteIngredient);

export default router;