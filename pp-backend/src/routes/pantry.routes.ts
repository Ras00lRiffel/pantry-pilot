import { Router } from "express";
import {
  getPantry,
  addPantryItem,
  removePantryItem,
} from "../controllers/pantry.controller";

const router = Router();

router.get("/", getPantry);
router.post("/add", addPantryItem);
router.post("/remove", removePantryItem);

export default router;