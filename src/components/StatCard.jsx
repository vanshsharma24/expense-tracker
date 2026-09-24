export function StatCard({ label, value, icon: Icon, accent }) {
  return (
    <div className="stat-card">
      <div>
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
      </div>
      <span className="stat-icon" style={{ backgroundColor: `${accent}1A` }}>
        <Icon size={20} color={accent} />
      </span>
    </div>
  );
}
