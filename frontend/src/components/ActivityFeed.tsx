export default function ActivityFeed() {
  const activities = [
    "📚 Machine Learning book viewed",
    "📅 AI Workshop scheduled",
    "🎓 Academics module loaded",
    "🤖 AI Assistant answered query",
    "⚡ Backend connected successfully",
  ];

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2>📝 Recent Activity</h2>

      <div style={{ marginTop: "15px" }}>
        {activities.map((activity, index) => (
          <div
            key={index}
            style={{
              padding: "12px",
              borderBottom: "1px solid #eee",
            }}
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}