const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  userName: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },
  role: String,
  active: Boolean,
});

module.exports = model("User", UserSchema);
