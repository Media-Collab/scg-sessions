const mongoose = require("mongoose");

/**
 * if mongo database dont exist
 */
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";

// options to use mongoose
mongoose.connect(URI, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
