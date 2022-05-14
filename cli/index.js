const { program } = require("commander");

program.option("-p --port <port>", "Insert port for the API");
program.parse();

const { port: userport } = program.opts();

const apiPort = userport || process.env.PORT || 4000;

module.exports = apiPort;
