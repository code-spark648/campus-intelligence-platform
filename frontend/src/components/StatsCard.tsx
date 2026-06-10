type Props = {
  title: string;
  value: string;
  icon: string;
};

export default function StatsCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      <h2 style={{ fontSize: "30px" }}>{icon}</h2>

      <h3>{value}</h3>

      <p style={{ color: "#666" }}>{title}</p>
    </div>
  );
}