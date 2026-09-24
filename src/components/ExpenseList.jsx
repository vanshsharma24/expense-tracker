import { Receipt, Trash2 } from "lucide-react";
import { CATEGORIES } from "../constants/Categories";
import { fmtMoney, fmtDate } from "../utils/Formatters";

// Renders the "Recent Expenses" list, an empty state, and per-row delete.
export function ExpenseList({ expenses, onDelete }) {
  return (
    <section className="card">
      <h2 className="card-title">Recent Expenses</h2>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <Receipt size={40} className="empty-icon" />
          <p>No expenses yet. Add your first expense above!</p>
        </div>
      ) : (
        <ul className="expense-list">
          {expenses.map((e) => {
            const cat = CATEGORIES[e.category] || CATEGORIES.Other;
            const Icon = cat.icon;
            return (
              <li key={e.id} className="expense-item">
                <div className="expense-item-left">
                  <span className="expense-icon" style={{ backgroundColor: cat.bg }}>
                    <Icon size={18} color={cat.color} />
                  </span>
                  <div className="expense-info">
                    <p className="expense-desc">{e.description}</p>
                    <p className="expense-meta">
                      {e.category} · {fmtDate(e.date)}
                    </p>
                  </div>
                </div>

                <div className="expense-item-right">
                  <span className="expense-amount">{fmtMoney(e.amount)}</span>
                  <button
                    onClick={() => onDelete(e.id)}
                    className="delete-btn"
                    aria-label={`Delete ${e.description}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
