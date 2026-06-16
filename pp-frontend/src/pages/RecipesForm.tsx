import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function RecipeForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    meal_type: "",
    cuisine: "",
    difficulty: "",
    prep_time_minutes: 0,
    cook_time_minutes: 0,
    calories: 0,
    calories_per_serving: 0,
    health_score: 0,
    base_servings: 1,
  });

  function updateField(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit() {
    await api.post("/recipes", form);
    navigate("/recipes");
  }

  return (
    <div>
      <h1>Create Recipe</h1>

      {Object.keys(form).map((key) => (
        <div key={key}>
          <input name={key} placeholder={key} onChange={updateField} />
        </div>
      ))}

      <button onClick={submit}>Save</button>
    </div>
  );
}
