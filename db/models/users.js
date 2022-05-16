const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;
