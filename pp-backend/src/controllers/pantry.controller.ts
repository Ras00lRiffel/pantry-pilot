import { Request, Response } from "express";
import db from "../config/db";

// GET PANTRY
export const getPantry = async (req: Request, res: Response) => {
  const { householdId } = req.params;

  const [rows] = await db.query(
    `SELECT p.*, i.name 
     FROM pantry_items p
     JOIN ingredients i ON i.id = p.ingredient_id
     WHERE p.household_id = ?`,
    [householdId]
  );

  res.json(rows);
};

// ADD INGREDIENT
export const addIngredient = async (req: Request, res: Response) => {
  const { household_id, ingredient_id, quantity, unit } = req.body;

  await db.query(
    `INSERT INTO pantry_items (household_id, ingredient_id, quantity, unit)
     VALUES (?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)`,
    [household_id, ingredient_id, quantity, unit]
  );

  res.json({ message: "Ingredient added" });
};