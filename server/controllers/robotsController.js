const debug = require("debug")("robots:controller");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    res.status(401).json({ msg: "User not found" });
    return;
  }

  const userDBData = {
    name: user.name,
    id: user.id,
  };

  const rightPassword = await bcrypt.compare(password, user.password);

  if (!rightPassword) {
    res.status(401).json({ msg: "User / Password incorrect" });
  } else {
    const userToken = jwt.sign({ userDBData }, process.env.JWT_SECRET);
    res.json(userToken);
  }
};

module.exports = { getRobots, deleteRobot, loginUser };
