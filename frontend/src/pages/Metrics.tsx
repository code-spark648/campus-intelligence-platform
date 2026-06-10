import { useEffect, useState } from "react";
import axios from "axios";

export default function Metrics() {
  const [books, setBooks] = useState(0);
  const [events, setEvents] = useState(0);
  const [courses, setCourses] = useState(0);

  useEffect(() => {
    loadMetrics();
  }, []);

  const loadMetrics = async () => {
    const booksRes = await axios.get(
      "http://127.0.0.1:8000/library"
    );

    const eventsRes = await axios.get(
      "http://127.0.0.1:8000/events"
    );

    const academicsRes = await axios.get(
      "http://127.0.0.1:8000/academics"
    );

    setBooks(booksRes.data.length);
    setEvents(eventsRes.data.length);
    setCourses(academicsRes.data.length);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📊 Project Metrics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>📚 Books Loaded</h2>
          <h1>{books}</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>📅 Events Loaded</h2>
          <h1>{events}</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>🎓 Courses Loaded</h2>
          <h1>{courses}</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>🤖 MCP Servers</h2>
          <h1>3</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>⚡ Backend Status</h2>
          <h1 style={{ color: "green" }}>
            Online
          </h1>
        </div>
      </div>
    </div>
  );
}