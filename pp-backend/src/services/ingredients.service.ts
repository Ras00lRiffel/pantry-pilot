import db from "../config/db";

export const getIngredients = async () => {
  const [rows] = await db.query(
    "SELECT * FROM ingredients ORDER BY name ASC"
  );

  return rows;
};

export const createIngredient = async (data: any) => {
  const { name, category } = data;

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  const [result]: any = await db.query(
    `
    INSERT INTO ingredients (name, slug, category)
    VALUES (?, ?, ?)
    `,
    [name, slug, category]
  );

  return {
    id: result.insertId,
    name,
    slug,
    category
  };
};

export const updateIngredient = async (id: number, data: any) => {
  const { name, category } = data;

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  await db.query(
    `
    UPDATE ingredients
    SET name = ?, slug = ?, category = ?
    WHERE id = ?
    `,
    [name, slug, category, id]
  );
};

export const searchIngredients = async (q: string) => {
  const [rows] = await db.query(
    `
    SELECT *
    FROM ingredients
    WHERE name LIKE ?
       OR category LIKE ?
    ORDER BY name ASC
    LIMIT 20
    `,
    [`%${q}%`, `%${q}%`]
  );

  return rows;
};

export const deleteIngredient = async (id: number) => {
  await db.query(
    "DELETE FROM ingredients WHERE id = ?",
    [id]
  );
};

export const getIngredientById = async (id: number) => {
  const [rows]: any = await db.query(
    "SELECT * FROM ingredients WHERE id = ?",
    [id]
  );

  return rows[0];
};