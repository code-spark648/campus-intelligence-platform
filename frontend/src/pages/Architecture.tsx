export default function Architecture() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🏗 MCP System Architecture</h1>

      {/* Architecture Flow */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Unified Campus Intelligence Platform</h2>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "20px",
            lineHeight: "2.2",
          }}
        >
          <div
            style={{
              background: "#dbeafe",
              padding: "20px",
              borderRadius: "15px",
              fontWeight: "bold",
            }}
          >
            🌐 React Frontend Dashboard
          </div>

          <div>⬇️</div>

          <div
            style={{
              background: "#ede9fe",
              padding: "20px",
              borderRadius: "15px",
              fontWeight: "bold",
            }}
          >
            🤖 Campus AI Assistant
          </div>

          <div>⬇️</div>

          <div
            style={{
              background: "#fef3c7",
              padding: "20px",
              borderRadius: "15px",
              fontWeight: "bold",
            }}
          >
            🔀 MCP Query Router
          </div>

          <div>⬇️</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginTop: "20px",
              marginBottom: "20px",
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
            </div>

            <div
              style={{
                background: "#dcfce7",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              📅 Events MCP
            </div>

            <div
              style={{
                background: "#fef3c7",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              🎓 Academics MCP
            </div>

            <div
              style={{
                background: "#fee2e2",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              🎓 Student MCP
            </div>
          </div>

          <div>⬇️</div>

          <div
            style={{
              background: "#e0f2fe",
              padding: "20px",
              borderRadius: "15px",
              fontWeight: "bold",
            }}
          >
            ⚡ FastAPI Backend Services
          </div>

          <div>⬇️</div>

          <div
            style={{
              background: "#f8fafc",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "10px",
            }}
          >
            🗄️ Independent Data Sources
            <br />
            <br />
            📚 books.json
            <br />
            📅 events.json
            <br />
            🎓 academics.json
            <br />
            🎓 profile.json
          </div>
        </div>
      </div>

      {/* Why MCP */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "25px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2>📖 Why MCP Architecture?</h2>

        <ul
          style={{
            lineHeight: "2",
            marginTop: "15px",
          }}
        >
          <li>
            Library, Events, Academics and Student
            Information are independent services.
          </li>

          <li>
            The AI Assistant receives natural language
            queries from students.
          </li>

          <li>
            The MCP Router identifies the correct
            service to answer the query.
          </li>

          <li>
            Each MCP service manages its own campus
            data source.
          </li>

          <li>
            FastAPI exposes all services through a
            unified API layer.
          </li>

          <li>
            Students interact with one assistant
            instead of multiple portals.
          </li>
        </ul>
      </div>
    </div>
  );
}