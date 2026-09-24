import { useMemo } from "react";

// Derives total, this-month total, top category, and daily average
// from the current list of expenses.
export function useExpenseStats(expenses) {
  return useMemo(() => {
    const now = new Date();
    const thisMonthKey = `${now.getFullYear()}-${now.getMonth()}`;

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    const thisMonth = expenses
      .filter((e) => {
        const d = new Date(e.date + "T00:00:00");
        return `${d.getFullYear()}-${d.getMonth()}` === thisMonthKey;
      })
      .reduce((sum, e) => sum + e.amount, 0);

    const topCategoryEntry = Object.entries(
      expenses.reduce((acc, e) => {
        acc[e.category] = (acc[e.category] || 0) + e.amount;
        return acc;
      }, {})
    ).sort((a, b) => b[1] - a[1])[0];

    const dayOfMonth = now.getDate();
    const dailyAvg = thisMonth / dayOfMonth;

    return {
      total,
      thisMonth,
      topCategory: topCategoryEntry ? topCategoryEntry[0] : "—",
      dailyAvg,
      count: expenses.length,
    };
  }, [expenses]);
}
