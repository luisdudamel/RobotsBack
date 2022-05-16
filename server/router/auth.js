const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const { usertoken } = req.headers;

    const token = usertoken.replace("Bearer ", "");

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = id;

    next();
  } catch {
    const errorcito = new Error("Invalid token auth");
    errorcito.statusCode = 401;
    next(errorcito);
  }
};
module.exports = auth;
