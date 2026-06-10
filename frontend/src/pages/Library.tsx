import { useEffect, useState } from "react";
import axios from "axios";

export default function Library() {
  const [books, setBooks] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/library")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>📚 Library Dashboard</h1>

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
          placeholder="Search books..."
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
        Books Found: {filteredBooks.length}
      </p>

      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {filteredBooks.map((book, index) => (
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
            <h3>{book.title}</h3>

            <p>
              📖 Available Copies: {book.copies}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}