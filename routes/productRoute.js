const express = require("express");
const { addProductController } = require("../controllers/productController");
const formidable = require("express-formidable");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const ExpressFormidable = require("express-formidable");

const router = express.Router();

router.post(
  "/addproduct",
  requireSignIn,
  isAdmin,
  formidable(),
  addProductController
);

module.exports = router;
