export const todayISO = () => new Date().toISOString().split("T")[0];

export const fmtMoney = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const fmtDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
