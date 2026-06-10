import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Library from "./pages/Library";
import Events from "./pages/Events";
import Academics from "./pages/Academics";
import Assistant from "./pages/Assistant";
import Architecture from "./pages/Architecture";
import Metrics from "./pages/Metrics";
import Profile from "./pages/profile";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f7fc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background:
            "linear-gradient(180deg,#2563eb,#1e40af)",
          color: "white",
          padding: "25px",
          boxShadow:
            "4px 0px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>
          🎓 Campus Intelligence
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Link to="/" style={linkStyle}>
            🏠 Home
          </Link>

          <Link to="/profile" style={linkStyle}>
            🎓 Student MCP
          </Link>

          <Link to="/library" style={linkStyle}>
            📚 Library MCP
          </Link>

          <Link to="/events" style={linkStyle}>
            📅 Events MCP
          </Link>

          <Link to="/academics" style={linkStyle}>
            🎓 Academics MCP
          </Link>

          <Link to="/assistant" style={linkStyle}>
            🤖 AI Assistant
          </Link>

          <Link to="/architecture" style={linkStyle}>
            🏗 Architecture
          </Link>

          <Link to="/metrics" style={linkStyle}>
            ⚙️ System Metrics
          </Link>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            style={{
              marginTop: "20px",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "#dc2626",
              color: "white",
              cursor: "pointer",
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/library" element={<Library />} />
          <Route path="/events" element={<Events />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.1)",
};

export default App;