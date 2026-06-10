import { Request, Response } from "express";
import * as recipeService from "../services/recipe.service";

export const getRecipes = async (
  req: Request,
  res: Response
) => {
  try {
    const recipes = await recipeService.getRecipes();

    res.status(200).json({
      success: true,
      data: recipes
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch recipes"
    });
  }
};

export const getRecipeById = async (
  req: Request,
  res: Response
) => {
  try {
    const recipe = await recipeService.getRecipeById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: recipe
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch recipe"
    });
  }
};

export const createRecipe = async (
  req: Request,
  res: Response
) => {
  try {
    const recipe = await recipeService.createRecipe(
      req.body
    );

    res.status(201).json({
      success: true,
      data: recipe,
      message: "Recipe Added!"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create recipe"
    });
  }
};

export const updateRecipe = async (
  req: Request,
  res: Response
) => {
  try {
    await recipeService.updateRecipe(
      Number(req.params.id),
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Recipe updated"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update recipe"
    });
  }
};

export const deleteRecipe = async (
  req: Request,
  res: Response
) => {
  try {
    await recipeService.deleteRecipe(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      message: "Recipe deleted"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete recipe"
    });
  }
};

export const searchRecipes = async (
  req: Request,
  res: Response
) => {
  try {
    const results = req.query.q || "";

    const recipes = await recipeService.searchRecipes(results.toString());

    res.json({
      success: true,
      data: recipes
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Search failed"
    });
  }
};

export const filterRecipes = async (req: Request, res: Response) => {
  try {
    const filters = req.query;

    const results = await recipeService.filterRecipes(filters);

    res.json({
      success: true,
      data: results
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Filter failed"
    });
  }
};