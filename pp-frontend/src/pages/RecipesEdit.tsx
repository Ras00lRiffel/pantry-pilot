import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function RecipeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await api.get(`/recipes/${id}/details`);
    setForm(res.data.data);
  }

  function updateField(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function update() {
    await api.put(`/recipes/${id}`, form);
    navigate(`/recipes/${id}`);
  }

  if (!form) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Recipe</h1>

      {Object.keys(form)
        .filter((k) => k !== "ingredients")
        .map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={updateField}
          />
        ))}

      <button onClick={update}>Update</button>
    </div>
  );
}
