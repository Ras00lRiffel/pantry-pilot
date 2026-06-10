import db from "../config/db";

export const getPantry = async () => {
  const [rows] = await db.query(`
    SELECT
      p.*,
      i.name AS ingredient_name
    FROM pantry_items p
    JOIN ingredients i
      ON i.id = p.ingredient_id
  `);

  return rows;
};

export const addPantryItem = async (
  data: {
    ingredient_id: number;
    quantity: number;
    unit: string;
  }
) => {
  const { ingredient_id, quantity, unit } = data;

  const [existing]: any = await db.query(
    `
    SELECT *
    FROM pantry_items
    WHERE ingredient_id = ?
    `,
    [ingredient_id]
  );

  if (existing.length > 0) {
    await db.query(
      `
      UPDATE pantry_items
      SET quantity = quantity + ?
      WHERE ingredient_id = ?
      `,
      [quantity, ingredient_id]
    );
  } else {
    await db.query(
      `
      INSERT INTO pantry_items
      (ingredient_id, quantity, unit)
      VALUES (?, ?, ?)
      `,
      [ingredient_id, quantity, unit]
    );
  }

  return { message: "Pantry updated" };
};

export const removePantryItem = async (
  data: {
    ingredient_id: number;
    quantity: number;
  }
) => {
  const { ingredient_id, quantity } = data;

  const [existing]: any = await db.query(
    `
    SELECT *
    FROM pantry_items
    WHERE ingredient_id = ?
    `,
    [ingredient_id]
  );

  if (existing.length > 0) {
    const currentQuantity = existing[0].quantity;
    if (currentQuantity >= quantity) {
      await db.query(
        `
        UPDATE pantry_items
        SET quantity = quantity - ?
        WHERE ingredient_id = ?
        `,
        [quantity, ingredient_id]
      );
    }
  }

  return { message: "Pantry updated" };
};