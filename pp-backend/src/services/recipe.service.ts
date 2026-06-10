import db from "../config/db";

export const getRecipes = async () => {
  const [rows] = await db.query(`
    SELECT *
    FROM recipes
    ORDER BY created_at DESC
  `);

  return rows;
};

export const getRecipeById = async (
  id: number
) => {
  const [rows]: any = await db.query(
    `
    SELECT *
    FROM recipes
    WHERE id = ?
    `,
    [id]
  );

  return rows[0];
};

export const createRecipe = async (
  recipe: any
) => {
  const {
    name,
    description,
    meal_type,
    health_score,
    prep_time_minutes,
    cook_time_minutes,
    difficulty,
    base_servings,
    cuisine,
    calories,
    calories_per_serving
  } = recipe;

  const [result]: any = await db.query(
    `
    INSERT INTO recipes (
      name,
      description,
      meal_type,
      health_score,
      prep_time_minutes,
      cook_time_minutes,
      difficulty,
      base_servings,
      cuisine,
      calories,
      calories_per_serving
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      description,
      meal_type,
      health_score,
      prep_time_minutes,
      cook_time_minutes,
      difficulty,
      base_servings,
      cuisine,
      calories,
      calories_per_serving
    ]
  );

  return {
    id: result.insertId
  };
};

export const updateRecipe = async (
  id: number,
  recipe: any
) => {
  const {
    name,
    description,
    meal_type,
    health_score,
    prep_time_minutes,
    cook_time_minutes,
    difficulty,
    base_servings,
    cuisine,
    calories,
    calories_per_serving
  } = recipe;

  await db.query(
    `
    UPDATE recipes
    SET
      name = ?,
      description = ?,
      meal_type = ?,
      health_score = ?,
      prep_time_minutes = ?,
      cook_time_minutes = ?,
      difficulty = ?,
      base_servings = ?,
      cuisine = ?,
      calories = ?,
      calories_per_serving = ?
    WHERE id = ?
    `,
    [
      name,
      description,
      meal_type,
      health_score,
      prep_time_minutes,
      cook_time_minutes,
      difficulty,
      base_servings,
      cuisine,
      calories,
      calories_per_serving,
      id
    ]
  );
};

export const deleteRecipe = async (
  id: number
) => {
  await db.query(
    `
    DELETE FROM recipes
    WHERE id = ?
    `,
    [id]
  );
};

export const searchRecipes = async (q: string) => {
  const [rows] = await db.query(
    `
    SELECT *
    FROM recipes
    WHERE name LIKE ?
       OR description LIKE ?
    ORDER BY created_at DESC
    LIMIT 20
    `,
    [`%${q}%`, `%${q}%`]
  );

  return rows;
};

export const filterRecipes = async (filters: any) => {
  let query = "SELECT * FROM recipes WHERE 1=1";
  const params: any[] = [];

  if (filters.cuisine) {
    query += " AND cuisine = ?";
    params.push(filters.cuisine);
  }

  if (filters.meal_type) {
    query += " AND meal_type = ?";
    params.push(filters.meal_type);
  }

  if (filters.difficulty) {
    query += " AND difficulty = ?";
    params.push(filters.difficulty);
  }

  if (filters.max_calories) {
    query += " AND calories <= ?";
    params.push(Number(filters.max_calories));
  }

  if (filters.min_health_score) {
    query += " AND health_score >= ?";
    params.push(Number(filters.min_health_score));
  }

  if (filters.max_prep_time) {
    query += " AND prep_time_minutes <= ?";
    params.push(Number(filters.max_prep_time));
  }

  query += " ORDER BY created_at DESC LIMIT 50";

  const [rows] = await db.query(query, params);

  return rows;
};