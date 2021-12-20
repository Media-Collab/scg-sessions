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
app.use("/api/users", require("./routes/users.route"));
app.use("/api/notes", require("./routes/notes.route"));

module.exports = app;
