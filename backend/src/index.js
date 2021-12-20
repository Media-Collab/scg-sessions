/**
 * Init server
 */
const app = require("./app");

const PORT = process.env.PORT || 4000;

async function main() {
  await app.listen(PORT); // app.listen() async method
  console.log(`Server listening in the port ${PORT}`);
}

main();
