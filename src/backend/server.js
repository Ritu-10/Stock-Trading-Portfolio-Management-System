// Simple Express.js backend server (dummy code)

const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Dummy route
app.get("/", (req, res) => {
  res.send("Stock Trading Backend API is running...");
});

// Example route for portfolio
app.get("/portfolio", (req, res) => {
  res.json({ message: "Portfolio data will be here" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
