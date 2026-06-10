import { Request, Response } from "express";
import * as ingredientService from "../services/ingredients.service";

export const getIngredients = async (req: Request, res: Response) => {
  try {
    const data = await ingredientService.getIngredients();

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch ingredients" });
  }
};

export const getIngredientById = async (req: Request, res: Response) => {
  try {
    const data = await ingredientService.getIngredientById(Number(req.params.id));

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch ingredient" });
  }
};

export const createIngredient = async (req: Request, res: Response) => {
  try {
    const data = await ingredientService.createIngredient(req.body);

    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create ingredient" });
  }
};

export const updateIngredient = async (req: Request, res: Response) => {
  try {
    await ingredientService.updateIngredient(Number(req.params.id), req.body);

    res.json({ success: true, message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update ingredient" });
  }
};

export const deleteIngredient = async (req: Request, res: Response) => {
  try {
    await ingredientService.deleteIngredient(Number(req.params.id));

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete ingredient" });
  }
};

export const searchIngredients = async (req: Request, res: Response) => {
  try {
    const q = String(req.query.q || "");

    const data = await ingredientService.searchIngredients(q);

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: "Search failed" });
  }
};