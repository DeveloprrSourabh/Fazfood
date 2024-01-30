const express = require("express");
const {
  addCategoryController,
  updateCategoryController,
} = require("../controllers/categoryController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const formidable = require("express-formidable");

const router = express.Router();

router.post(
  "/addcategory",
  requireSignIn,
  isAdmin,
  formidable(),
  addCategoryController
);
router.post(
  "/updatecategory",
  requireSignIn,
  isAdmin,
  formidable(),
  updateCategoryController
);

module.exports = router;
