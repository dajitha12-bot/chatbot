import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// (Optional – uncomment when agents are ready)
// import { explanationAgent } from "./agents/ExplanationAgent.js";
// import { evaluatorAgent } from "./agents/EvaluatorAgent.js";

dotenv.config();

const app = express();

// Needed for ES module path handling
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// ===== SERVE FRONTEND =====
// Make sure frontend folder exists at project-root/frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Load HTML in browser
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ===== CHAT API =====
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  // TEMP response (working now)
  const reply = `Agent received: "${userMessage}"`;

  // ===== FUTURE MULTI-AGENT LOGIC =====
  /*
  const explanation = explanationAgent(userMessage);
  const evaluation = evaluatorAgent(explanation);
  const reply = evaluation;
  */

  res.json({ reply });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
