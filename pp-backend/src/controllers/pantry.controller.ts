import { Request, Response } from "express";
import * as pantryService from "../services/pantry.service";
import db from "../config/db";


// Pantry API CONTROLLERS
// GET PANTRY
export const getPantry = async (
  req: Request,
  res: Response
) => {
  try {
    const pantry = await pantryService.getPantry();

    res.status(200).json({
      success: true,
      data: pantry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch pantry",
    });
  }
};

// ADD A PANTRY ITEM
export const addPantryItem = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pantryService.addPantryItem(
      req.body
    );

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to add pantry item",
    });
  }
};

// REMOVE A PANTRY ITEM
export const removePantryItem = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pantryService.removePantryItem(
      req.body
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to remove pantry item",
    });
  }
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