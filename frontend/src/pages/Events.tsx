import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://campus-intelligence-backend.onrender.com/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>📅 Campus Events</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
          marginBottom: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />
      </div>

      <p
        style={{
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Events Found: {filteredEvents.length}
      </p>

      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{event.title}</h3>

            <p>
              📆 Date: {event.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}