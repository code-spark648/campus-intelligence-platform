import { useEffect, useState } from "react";
import axios from "axios";

export default function Academics() {
  const [courses, setCourses] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/academics"
    );

    setCourses(res.data);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.course
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      course.faculty
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎓 Academic Courses</h1>

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
          placeholder="Search course or faculty..."
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
        Courses Found: {filteredCourses.length}
      </p>

      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {filteredCourses.map((course, index) => (
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
            <h3>{course.course}</h3>

            <p>
              👨‍🏫 Faculty: {course.faculty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}