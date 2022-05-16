const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const { usertoken } = req.headers;

    const token = usertoken.replace("Bearer ", "");

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = id;

    next();
  } catch {
    const invalidAuthError = new Error("Invalid token auth");
    invalidAuthError.statusCode = 401;
    next(invalidAuthError);
  }
};
module.exports = auth;
