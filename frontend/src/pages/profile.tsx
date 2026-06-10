import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/profile"
    );

    setProfile(res.data);
  };

  if (!profile) {
    return <h2>Loading Profile...</h2>;
  }

  return (
    <div>
      <h1>👤 Student Profile</h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "#2563eb",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "50px",
            }}
          >
            👤
          </div>

          <h2 style={{ marginTop: "15px" }}>
            {profile.name}
          </h2>
        </div>

        <p>
          <strong>Institute:</strong>{" "}
          {profile.institute}
        </p>

        <p>
          <strong>Department:</strong>{" "}
          {profile.department}
        </p>

        <p>
          <strong>Current Year:</strong>{" "}
          {profile.year}
        </p>

        <p>
          <strong>CGPA:</strong>{" "}
          {profile.cgpa}
        </p>

        <h3 style={{ marginTop: "25px" }}>
          Current Courses
        </h3>

        <ul style={{ lineHeight: "2" }}>
          <li>Machine Learning</li>
          <li>Database Management Systems</li>
          <li>Operating Systems</li>
          <li>Computer Networks</li>
        </ul>
      </div>
    </div>
  );
}