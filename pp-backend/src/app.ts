import express from "express";
import cors from "cors";

import pantryRoutes from "./routes/pantry.routes";
import recipeRoutes from "./routes/recipe.routes";
// import cookRoutes from "./routes/cook.routes";
// import groceryRoutes from "./routes/grocery.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/pantry", pantryRoutes);
app.use("/api/recipes", recipeRoutes);
// app.use("/api/cook", cookRoutes);
// app.use("/api/grocery", groceryRoutes);

export default app;