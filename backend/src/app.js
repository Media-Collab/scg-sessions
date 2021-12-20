/**
 * Create server
 */
const express = require("express");
const cors = require("cors");

/**
 * Create and initialize app
 * @constant app
 */
const app = express();

// settings config server
app.set("port", process.env.PORT || 4000);

// middleware define functions before enter to the routes
app.use(cors()); // every time a request is received, the app will accepts
app.use(express.json()); // the server knows JSON format

// routes
app.get("/api/users", (req, res) => {
  res.json({
    status: "Good, users routes",
  });
});

app.get("/api/notes", (req, res) => {
  res.json({
    status: "Good, notes routes",
  });
});

module.exports = app;
