/**
 * Before init the app, imports the env variables
 */
require("dotenv").config();

/**
 * Init server
 */
const app = require("./app");
require("./database");

const PORT = process.env.PORT || 4000;

async function main() {
  await app.listen(PORT); // app.listen() async method
  console.log(`Server listening in the port ${PORT}`);
}

main();
