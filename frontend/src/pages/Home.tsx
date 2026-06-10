import LiveStats from "../components/LiveStats";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#06b6d4)",
          padding: "50px",
          borderRadius: "25px",
          color: "white",
          marginBottom: "30px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          🤖 Campus Intelligence Assistant
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Unified AI-powered platform that routes
          student queries to independent MCP services
          including Library, Events, Academics and
          Student Information.
        </p>
      </div>

      {/* Live Stats */}
      <LiveStats />

      {/* MCP Services */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "30px",
          boxShadow:
            "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2>🧩 Connected MCP Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#dbeafe",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            📚 Library MCP
            <br />
            🟢 Online
          </div>

          <div
            style={{
              background: "#dcfce7",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            📅 Events MCP
            <br />
            🟢 Online
          </div>

          <div
            style={{
              background: "#fef3c7",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            🎓 Academics MCP
            <br />
            🟢 Online
          </div>

          <div
            style={{
              background: "#fee2e2",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            👤 Profile MCP
            <br />
            🟢 Online
          </div>
        </div>
      </div>

      {/* Query Flow */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "30px",
          boxShadow:
            "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2>🔀 Query Routing Flow</h2>

        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "2.2",
            marginTop: "20px",
          }}
        >
          <div>👨‍🎓 Student Query</div>

          <div>⬇️</div>

          <div>🤖 AI Assistant</div>

          <div>⬇️</div>

          <div>🔀 MCP Router</div>

          <div>⬇️</div>

          <div>
            📚 Library MCP | 📅 Events MCP |
            🎓 Academics MCP | 👤 Profile MCP
          </div>

          <div>⬇️</div>

          <div>🗄️ Campus Data Sources</div>
        </div>
      </div>

      {/* Example Queries */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "30px",
          boxShadow:
            "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2>💬 Example Queries</h2>

        <ul
          style={{
            lineHeight: "2",
            marginTop: "15px",
          }}
        >
          <li>Show available books</li>
          <li>Any upcoming hackathons?</li>
          <li>Show courses and faculty</li>
          <li>Show my profile</li>
          <li>How many books are available?</li>
          <li>How many events are scheduled?</li>
        </ul>
      </div>
    </div>
  );
}