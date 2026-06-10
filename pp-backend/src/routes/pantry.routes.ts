import { Router } from "express";
import {
  getPantry,
  addIngredient
} from "../controllers/pantry.controller";

const router = Router();

router.get("/:householdId", getPantry);
router.post("/add", addIngredient);

export default router;