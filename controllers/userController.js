const { hashPassword, unhashPassword } = require("../helpers/userHelpers");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// USER REGISTER CONTROLLER
exports.userRegisterController = async (req, res) => {
  try {
    const { name, email, password, answer, address, role } = req.body;
    if (!name) {
      return res.status(200).send({ message: "Name is Required" });
    }
    if (!email) {
      return res.status(200).send({ message: "Email is Required" });
    }
    if (!answer) {
      return res.status(200).send({ message: "Answer is Required" });
    }
    if (!role) {
      return res.status(200).send({ message: "Role is Required" });
    }
    if (!password) {
      return res.status(200).send({ message: "Password is Required" });
    }

    // Checking While user already exist or not
    let existuser = await User.findOne({ email });
    if (existuser) {
      return res
        .status(200)
        .send({ success: false, message: "User Already Exists" });
    }
    const secPass = await hashPassword(password);
    const user = new User({
      name,
      email,
      password: secPass,
      role,
      answer,
    }).save();
    return res.status(200).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Register User",
    });
  }
};

// USER LOGIN CONTROLLER
exports.userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User Not Regster",
      });
    }

    // Compare Password
    const comparePass = await unhashPassword(password, user.password);
    if (!comparePass) {
      return res.status(400).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // Authentication Token
    const token = jwt.sign({ _id: user._id }, "SOURABH");
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        answer: user.answer,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Login User",
    });
  }
};

// USER UPDATE CONTROLLER
exports.userUpdateController = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    if (!name) {
      return res.send({ success: false, message: "Please Enter a Valid Name" });
    }
    if (!email) {
      return res.send({
        success: false,
        message: "Please Enter a Valid Email",
      });
    }
    if (!address) {
      return res.send({
        success: false,
        message: "Please Enter a Valid Address",
      });
    }
    // Check User
    let user = await User.findById(req.user._id);

    user = await User.findByIdAndUpdate(
      user._id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Profile Updated Succssfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While User Update",
    });
  }
};
