require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const apiPort = require("./cli");
const { connectToDatabase } = require("./db/index");
const { serverInitialize } = require("./server/serverInitialize");

(async () => {
  try {
    await connectToDatabase(process.env.MONGO_STRING);
    await serverInitialize(apiPort);
  } catch {
    debug(chalk.red("Server initialization failed"));
  }
})();
