const express = require("express");

const notesRouter = require("./notes.route");
const usersRouter = require("./users.route");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/notes", notesRouter);
  router.use("/users", usersRouter);
}

module.exports = routerApi;
