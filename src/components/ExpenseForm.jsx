import { useState } from "react";
import { CATEGORIES } from "../constants/Categories";
import { todayISO } from "../utils/Formatters";
export function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: todayISO(),
  });
  const [error, setError] = useState("");
  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const amountNum = parseFloat(form.amount);
    if (!form.amount || isNaN(amountNum) || amountNum <= 0) {
      setError("Enter a valid amount greater than 0.");
      return;
    }
    if (!form.category) {
      setError("Pick a category.");
      return;
    }
    if (!form.description.trim()) {
      setError("Add a short description.");
      return;
    }
    onAdd({
      id: Date.now(),
      amount: amountNum,
      category: form.category,
      description: form.description.trim(),
      date: form.date,
    });
    setForm({ amount: "", category: "", description: "", date: todayISO() });
    setError("");
  };
  return (
    <section className="card">
      <h2 className="card-title">Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Amount ($)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={form.amount}
              onChange={handleChange("amount")}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              value={form.category}
              onChange={handleChange("category")}
              className="form-input"
            >
              <option value="">Select category</option>
              {Object.keys(CATEGORIES).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <input
            type="text"
            placeholder="What did you spend on?"
            value={form.description}
            onChange={handleChange("description")}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            type="date"
            value={form.date}
            onChange={handleChange("date")}
            className="form-input"
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>
    </section>
  );
}
