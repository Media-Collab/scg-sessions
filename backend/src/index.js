/**
 * Before init the app, imports the env variables
 */
require("dotenv").config();

/**
 * Init server
 */
const app = require("./app");
require("./database");

async function main() {
  await app.listen(app.get("port")); // app.listen() async method
  console.log(`Server listening in the port ${app.get("port")}`);
}

main();
