require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const connectToDatabase = require("./db/index");
const serverInitialize = require("./server/serverInitialize");

(async () => {
  try {
    await connectToDatabase(process.env.MONGO_STRING);
    await serverInitialize(process.env.SERVER_PORT || 4000);
  } catch {
    debug(chalk.red("Server initialization failed"));
  }
})();
