require("dotenv").config();
const debug = require("debug")("robots:api-server:initialize");
const chalk = require("chalk");
const app = require("./index");
const { robotsRouter } = require("./router/robotsRouter");

const serverInitialize = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.greenBright(`Server is up and running on port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.bgRed("Error on server: "(error.message)));
    if (error.code === "EADDRINUSE") {
      debug(chalk.redBright(`Port ${port} already in use`));
    }
  });
};
app.use("/", robotsRouter);
module.exports = { serverInitialize };
