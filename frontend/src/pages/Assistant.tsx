import { useState } from "react";
import axios from "axios";

export default function Assistant() {
  const [query, setQuery] = useState("");
  const [currentRoute, setCurrentRoute] = useState("Waiting...");

  const [messages, setMessages] = useState<
    { sender: string; text: string }[]
  >([
    {
      sender: "bot",
      text:
        "👋 Welcome to Campus AI Assistant!\n\n" +
        "Try asking:\n" +
        "• Show library books\n" +
        "• Show machine learning book\n" +
        "• How many copies of machine learning are there?\n" +
        "• Show events\n" +
        "• Show courses\n" +
        "• Show my profile",
    },
  ]);

  const askAssistant = async () => {
    if (!query.trim()) return;

    const userQuery = query;
    const q = userQuery.toLowerCase();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuery,
      },
    ]);

    try {
      let response = "";

      // =====================
      // SPECIFIC BOOK QUERY
      // =====================

      if (
        q.includes("machine learning") ||
        q.includes("data structures") ||
        q.includes("computer networks") ||
        q.includes("operating systems")
      ) {
        setCurrentRoute("📚 Library MCP");

        const res = await axios.get(
          "https://campus-intelligence-backend.onrender.com/library"
        );

        const book = res.data.find((b: any) =>
          q.includes(b.title.toLowerCase())
        );

        if (book) {
          response =
            `📚 ${book.title}\n\n` +
            `Available Copies: ${book.copies}`;
        } else {
          response = "Book not found.";
        }
      }

      // =====================
      // LIBRARY MCP
      // =====================

      else if (
        q.includes("book") ||
        q.includes("library")
      ) {
        setCurrentRoute("📚 Library MCP");

        const res = await axios.get(
          "https://campus-intelligence-backend.onrender.com/library"
        );

        response =
          "📚 LIBRARY MCP\n\n" +
          res.data
            .map(
              (book: any) =>
                `• ${book.title} (${book.copies} copies)`
            )
            .join("\n");
      }

      // =====================
      // BOOK COUNT
      // =====================

      else if (
        q.includes("how many books") ||
        q.includes("book count")
      ) {
        setCurrentRoute("📚 Library MCP");

        const res = await axios.get(
          "https://campus-intelligence-backend.onrender.com/library"
        );

        response = `📚 Total Books Available: ${res.data.length}`;
      }

      // =====================
      // EVENTS MCP
      // =====================

      else if (
        q.includes("event") ||
        q.includes("hackathon") ||
        q.includes("workshop") ||
        q.includes("seminar") ||
        q.includes("alumni")
      ) {
        setCurrentRoute("📅 Events MCP");

        const res = await axios.get(
          "https://campus-intelligence-backend.onrender.com/events"
        );

        response =
          "📅 EVENTS MCP\n\n" +
          res.data
            .map(
              (event: any) =>
                `• ${event.title} (${event.date})`
            )
            .join("\n");
      }

      // =====================
      // EVENT COUNT
      // =====================

      else if (
        q.includes("how many events") ||
        q.includes("event count")
      ) {
        setCurrentRoute("📅 Events MCP");

        const res = await axios.get(
          "https://campus-intelligence-backend.onrender.com/events"
        );

        response = `📅 Total Events Scheduled: ${res.data.length}`;
      }

      // =====================
      // ACADEMICS MCP
      // =====================

      else if (
        q.includes("course") ||
        q.includes("courses") ||
        q.includes("academic") ||
        q.includes("faculty")
      ) {
        setCurrentRoute("🎓 Academics MCP");

        const res = await axios.get(
          "https://campus-intelligence-backend.onrender.com/academics"
        );

        response =
          "🎓 ACADEMICS MCP\n\n" +
          res.data
            .map(
              (course: any) =>
                `• ${course.course} - ${course.faculty}`
            )
            .join("\n");
      }

      // =====================
      // PROFILE MCP
      // =====================

      else if (
        q.includes("profile") ||
        q.includes("student")
      ) {
        setCurrentRoute("👤 Student MCP");

        const res = await axios.get(
          "https://campus-intelligence-backend.onrender.com/profile"
        );

        const profile = res.data;

        response =
          "👤 STUDENT PROFILE\n\n" +
          `Name: ${profile.name}\n` +
          `Institute: ${profile.institute}\n` +
          `Department: ${profile.department}\n` +
          `Year: ${profile.year}\n` +
          `CGPA: ${profile.cgpa}`;
      }

      // =====================
      // FALLBACK
      // =====================

      else {
        setCurrentRoute("Waiting...");

        response =
          "🤖 Available MCP Services:\n\n" +
          "📚 Library MCP\n" +
          "📅 Events MCP\n" +
          "🎓 Academics MCP\n" +
          "👤 Student MCP";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: response,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Unable to connect to backend.",
        },
      ]);
    }

    setQuery("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤖 Campus AI Assistant</h1>

      <div
        style={{
          background: "#eff6ff",
          border: "2px solid #2563eb",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <h2>🔀 MCP Routing Engine</h2>
        <h3>Current Route: {currentRoute}</h3>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "20px",
          minHeight: "550px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                alignSelf:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                background:
                  msg.sender === "user"
                    ? "#2563eb"
                    : "#f3f4f6",
                color:
                  msg.sender === "user"
                    ? "white"
                    : "black",
                padding: "15px",
                borderRadius: "15px",
                maxWidth: "75%",
                whiteSpace: "pre-line",
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Ask about books, events, academics..."
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <button
            onClick={askAssistant}
            style={{
              padding: "15px 25px",
              borderRadius: "10px",
              border: "none",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}