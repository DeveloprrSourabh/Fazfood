const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error While HAshing Password",
    });
  }
};

exports.unhashPassword = async (password, userPassword) => {
  try {
    const unhashedPass = await bcrypt.compare(password, userPassword);
    return unhashedPass;
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error While UnHashPassword",
    });
  }
};
