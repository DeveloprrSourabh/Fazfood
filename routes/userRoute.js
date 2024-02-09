const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userUpdateController,
} = require("../controllers/userController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// All Routes
router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.put("/update", requireSignIn, userUpdateController);

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  return res.status(200).send({ ok: true });
});
router.get("/user-auth", requireSignIn, (req, res) => {
  return res.status(200).send({ ok: true });
});

module.exports = router;
