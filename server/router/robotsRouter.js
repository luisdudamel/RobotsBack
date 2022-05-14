const express = require("express");
const { getRobots } = require("../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.get("/robots", getRobots);

module.exports = {
  robotsRouter,
};
