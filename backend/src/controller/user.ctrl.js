const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const userCtrl = {};
userCtrl.signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const newUser = new User({
      userName,
      email,
      password,
    });

    const existEmail = await User.findOne({ email: email });
    if (existEmail) {
      res.status(400).json({
        message: "Email exist",
      });
    } else {
      newUser.password = await bcrypt.hash(password, 10);
      await newUser.save();
      res.status(201).json({
        message: "User was created successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
userCtrl.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginEmail = await User.findOne({ email: email });
    if (!loginEmail) {
      return res.status(400).json({
        message: "wrong email",
      });
    }
    const match = await bcrypt.compare(password, loginEmail.password);
    if (match) {
      res.status(200).json({
        message: "Welcomeback",
      });
    } else {
      res.status(400).json({
        message: "Password is not correct",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = userCtrl;
