const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userUpdateController,
} = require("../controllers/userController");
const { requireSignIn } = require("../middlewares/authMiddleware");

const router = express.Router();

// All Routes
router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.put("/update", requireSignIn, userUpdateController);

module.exports = router;
