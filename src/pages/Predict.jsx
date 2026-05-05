import { useState } from "react";
import { postData } from "../api";
import Sidebar from "../components/Sidebar";

export default function Predict() {
    const [hours, setHours] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [consistency, setConsistency] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePredict = async () => {
        if (!hours || !difficulty || !consistency) {
            alert("Fill all fields");
            return;
        }
        setLoading(true);
        try {
            const res = await postData("/predict", {
                hours: Number(hours),
                difficulty: Number(difficulty),
                consistency: Number(consistency)
            });
            setResult(res.predicted_score);
        } catch (err) {
            console.error(err);
            setResult("Error");
        }
        setLoading(false);
    };

    return (
  <div style={{
    display: "flex",
    minHeight: "100vh",
    background: "#020617",
    color: "white"
  }}>

    <Sidebar />

    <div style={{
      flex: 1,
      padding: "30px"
    }}>

      <h1 style={{ fontSize: "40px" }}>
        Performance Predictor 📊
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
        Predict your study performance using AI
      </p>

      <div style={{
        background: "#0f172a",
        padding: "30px",
        borderRadius: "20px",
        maxWidth: "500px"
      }}>

        <input type="number" placeholder="Study Hours"
          onChange={(e) => setHours(Number(e.target.value))}
          style={{ margin: "10px", padding: "10px", width: "100%" }}
        />

        <input type="number" placeholder="Difficulty (1-3)"
          onChange={(e) => setDifficulty(Number(e.target.value))}
          style={{ margin: "10px", padding: "10px", width: "100%" }}
        />

        <input type="number" placeholder="Consistency (1-3)"
          onChange={(e) => setConsistency(Number(e.target.value))}
          style={{ margin: "10px", padding: "10px", width: "100%" }}
        />

        <button
          onClick={handlePredict}
          disabled={loading}
          style={{
            marginTop: "10px",
            padding: "12px",
            width: "100%",
            background: "#06b6d4",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {result && (
          <div style={{ marginTop: "20px" }}>
            <h3>Predicted Score: {result}</h3>

            <p>
              {result >= 80 && "🔥 Excellent performance expected"}
              {result >= 60 && result < 80 && "👍 Good performance"}
              {result >= 40 && result < 60 && "⚠️ Average, can improve"}
              {result < 40 && "❗ Needs serious improvement"}
            </p>
          </div>
        )}

      </div>

    </div>
  </div>
)}