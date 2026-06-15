import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>PantryPilot</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <Link to="/">Dashboard</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/pantry">Pantry</Link>
        <Link to="/meal-plans">Meal Plans</Link>
        <Link to="/grocery-lists">Grocery Lists</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}
