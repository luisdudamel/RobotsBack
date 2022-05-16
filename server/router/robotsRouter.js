const express = require("express");
const {
  getRobots,
  deleteRobot,
  loginUser,
} = require("../controllers/robotsController");
const auth = require("../middlewares/auth");

const robotsRouter = express.Router();

robotsRouter.get("/", auth, getRobots);
robotsRouter.delete("/delete/:idRobot", deleteRobot);

robotsRouter.post("/login", loginUser);
module.exports = {
  robotsRouter,
};
