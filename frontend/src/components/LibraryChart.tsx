import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", books: 120 },
  { day: "Tue", books: 210 },
  { day: "Wed", books: 180 },
  { day: "Thu", books: 260 },
  { day: "Fri", books: 320 },
];

export default function LibraryChart() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        height: "350px",
      }}
    >
      <h2>📚 Library Usage Analytics</h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="books" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}