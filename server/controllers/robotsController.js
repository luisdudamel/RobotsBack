const debug = require("debug")("robots:controller");
const chalk = require("chalk");
const Robot = require("../../db/models/robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
  debug(
    chalk.greenBright(`A get request to robots database has been received`)
  );
};

const deleteRobot = async (req, res) => {
  const { idRobot } = req.params;
  const robotDeleted = await Robot.findByIdAndDelete(idRobot);
  res.status(200).json({ robotDeleted });

  debug(
    chalk.greenBright(`A delete request to robots database has been received`)
  );
};

module.exports = { getRobots, deleteRobot };
