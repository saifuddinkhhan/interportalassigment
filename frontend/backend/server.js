const connectDB = require('./db');
connectDB();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy user data
const users = [
  {
    name: "Alice Johnson",
    referralCode: "alice2025",
    donations: 3400,
    rewards: ["T-shirt", "E-book", "Workshop Pass"]
  },
  {
    name: "Bob Smith",
    referralCode: "bob2025",
    donations: 1200,
    rewards: ["T-shirt"]
  }
];

// Get user by name
app.get('/api/user/:name', (req, res) => {
  const user = users.find(u => u.name.toLowerCase() === req.params.name.toLowerCase());
  if (user) return res.json(user);
  return res.status(404).json({ error: "User not found" });
});

// Leaderboard
app.get('/api/leaderboard', (req, res) => {
  const sorted = [...users].sort((a, b) => b.donations - a.donations);
  res.json(sorted);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
