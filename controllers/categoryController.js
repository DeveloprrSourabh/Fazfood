const Category = require("../models/categoryModel");
const fs = require("fs");
const slugify = require("slugify");

// Add Category Controller
exports.addCategoryController = async (req, res) => {
  try {
    const { name } = req.fields;
    const { photo } = req.files;
    if (!name) {
      return res.send({
        success: false,
        message: "Name is required",
      });
    }
    const existName = await Category.findOne({ name });
    if (existName) {
      return res.send({
        success: false,
        message: "Category is already exists",
      });
    }
    let newCategory = await new Category({
      ...req.fields,
      slug: slugify(name),
    });
    if (photo) {
      newCategory.photo.data = fs.readFileSync(photo.path);
      newCategory.photo.contentType = photo.type;
    }
    await newCategory.save();
    return res.status(200).send({
      success: true,
      message: "Category Added Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error While Adding Category",
    });
  }
};

// Update Category Controller
exports.updateCategoryController = async (req, res) => {
  try {
    const { name } = req.fields;
    const { photo } = req.files;
    if (!name) {
      return res.status(200).send({
        success: false,
        message: "Name is required",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      success: false,
      message: "Error While Update Category",
    });
  }
};
