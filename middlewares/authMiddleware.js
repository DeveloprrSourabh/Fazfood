const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Check User Login
exports.requireSignIn = async (req, res, next) => {
  try {
    const decode = await jwt.verify(req.headers.authorization, "SOURABH");
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Jwt must be provided",
    });
  }
};
// Check Admin
exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(400).send({
        success: false,
        message: "Unathorizatiion Access",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Checking Admin",
    });
  }
};
