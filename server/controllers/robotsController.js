const debug = require("debug")("robots:controller");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");
const Robot = require("../../db/models/robot");
const User = require("../../db/models/users");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
  debug(
    chalk.greenBright(`A get request to robots database has been received`)
  );
};

const deleteRobot = async (req, res) => {
  const { idRobot } = req.params;
  await Robot.findByIdAndDelete(idRobot);
  res.status(200).json(idRobot);

  debug(
    chalk.greenBright(`A delete request to robots database has been received`)
  );
};

// const createRobot = async (req, res) => {
// const robot = req.body
// const

// }

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.find({ password, username });

  if (!user) {
    res.status(401).json({ msg: "User not found" });
    return;
  }

  const userToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json(userToken);
};

module.exports = { getRobots, deleteRobot, loginUser };
