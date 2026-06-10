import { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "./StatsCard";

export default function LiveStats() {
  const [books, setBooks] = useState(0);
  const [events, setEvents] = useState(0);
  const [courses, setCourses] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
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
    } catch (error) {
      console.error("Error loading stats:", error);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
      }}
    >
      <StatsCard
        icon="📚"
        value={String(books)}
        title="Books Loaded"
      />

      <StatsCard
        icon="📅"
        value={String(events)}
        title="Events Loaded"
      />

      <StatsCard
        icon="🎓"
        value={String(courses)}
        title="Courses Loaded"
      />

      <StatsCard
        icon="🤖"
        value="3"
        title="MCP Servers"
      />
    </div>
  );
}