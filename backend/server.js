// server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ DB connection error:", err));


const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model("User", UserSchema);

// --- Journal model (persisted in MongoDB) ---
const JournalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  mood: { type: String },
  confidence: { type: Number },
  timestamp: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});
const Journal = mongoose.model('Journal', JournalSchema);

// --- Middleware auth ---
const auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "No token" });
  jwt.verify(token, "secret123", (err, decoded) => {
    if (err) return res.status(401).json({ msg: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

// --- Register ---
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });
  res.json({ msg: "User registered" });
});

// --- Login ---
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "No user" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ msg: "Wrong password" });
  const token = jwt.sign({ id: user._id }, "secret123");
  res.cookie("token", token, { httpOnly: true }).json({ msg: "Logged in" });
});

// --- Logout ---
app.post("/logout", (req, res) => {
  res.clearCookie("token").json({ msg: "Logged out" });
});

// --- Get journals ---
// --- Get journals (from DB) ---
app.get("/journals", auth, async (req, res) => {
  try {
    const entries = await Journal.find({ user: req.userId }).sort({ timestamp: -1 });
    res.json(entries);
  } catch (err) {
    console.error("Error fetching journals:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// --- Add journal (persist to DB) ---
app.post("/journals", auth, async (req, res) => {
  try {
    const { text, mood, confidence, timestamp } = req.body;
    if (!text || typeof text !== 'string') return res.status(400).json({ msg: 'Text is required' });

    let confNum;
    if (confidence !== undefined) {
      confNum = Number(confidence);
      if (Number.isNaN(confNum)) return res.status(400).json({ msg: 'Confidence must be a number' });
    }

    const entry = await Journal.create({
      user: req.userId,
      text,
      mood,
      confidence: confNum,
      timestamp: timestamp ? new Date(timestamp) : undefined
    });
    res.json(entry);
  } catch (err) {
    console.error("Error creating journal:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// --- Delete journal (DB) ---
app.delete("/journals/:id", auth, async (req, res) => {
  try {
    const deleted = await Journal.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!deleted) return res.status(404).json({ msg: 'Not found' });
    res.json({ msg: "Deleted" });
  } catch (err) {
    console.error("Error deleting journal:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
