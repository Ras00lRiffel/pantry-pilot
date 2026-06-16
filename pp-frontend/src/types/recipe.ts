export interface RecipeIngredient {
  ingredient_id: number;
  ingredient_name: string;
  category: string;
  quantity: string;
  unit: string;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;

  meal_type: string;
  health_score: number;

  prep_time_minutes: number;
  cook_time_minutes: number;
  total_time_minutes: number;

  difficulty: string;
  base_servings: number;

  cuisine: string;

  calories: number;
  calories_per_serving: number;

  created_at: string;

  ingredients: RecipeIngredient[];
}