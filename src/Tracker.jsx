import { useState } from "react";
import { DollarSign, Calendar, TrendingUp, Receipt } from "lucide-react";

import { useExpenseStats } from "./hooks/useExpenseStats";
import { fmtMoney } from "./utils/Formatters";
import { todayISO } from "./utils/Formatters";

import { StatCard } from "./components/StatCard";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";

export default function Tracker() {
  // In-memory store. Swap this for a real API/DB call if you wire one up.
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 42.5, category: "Food", description: "Groceries", date: todayISO() },
    { id: 2, amount: 15, category: "Transport", description: "Metro card top-up", date: todayISO() },
  ]);

  const stats = useExpenseStats(expenses);

  const handleAdd = (expense) =>
    setExpenses((prev) => [expense, ...prev]);

  const handleDelete = (id) =>
    setExpenses((prev) => prev.filter((e) => e.id !== id));

  return (
    <div className="tracker-page">
      <div className="tracker-container">
        {/* Header */}
        <header className="tracker-header">
          <h1 className="tracker-title">Expense Tracker</h1>
          <p className="tracker-subtitle">
            Keep track of your spending and manage your budget
          </p>
        </header>

        {/* Stat cards */}
        <div className="stats-grid">
          <StatCard
            label="Total Expense"
            value={fmtMoney(stats.total)}
            icon={DollarSign}
            accent="#0D9488"
          />
          <StatCard
            label="This Month"
            value={fmtMoney(stats.thisMonth)}
            icon={Calendar}
            accent="#4F46E5"
          />
          <StatCard
            label="Top Category"
            value={stats.topCategory}
            icon={TrendingUp}
            accent="#F97316"
          />
          <StatCard
            label="Daily Average"
            value={fmtMoney(stats.dailyAvg || 0)}
            icon={Receipt}
            accent="#EC4899"
          />
        </div>

        {/* Main content */}
        <div className="main-grid">
          <ExpenseForm onAdd={handleAdd} />
          <ExpenseList expenses={expenses} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
