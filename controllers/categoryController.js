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
    const { id } = req.params;
    if (!name) {
      return res.status(200).send({
        success: false,
        message: "Name is required",
      });
    }
    const existName = await Category.findOne({ name });
    if (existName) {
      return res.status(400).send({ message: "Category Already Exist" });
    } else {
      let cat = await Category.findByIdAndUpdate(
        id,
        {
          name: name,
          slug: slugify(name),
        },
        { new: true }
      );
    }
    return res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      cat,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      success: false,
      message: "Error While Update Category",
    });
  }
};

// Delete Category Controller

exports.deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await Category.findByIdAndDelete(id);
    return res
      .status(200)
      .send({ success: true, message: "Category Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting Category",
    });
  }
};

// Getting All Categories
exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(200).send({
      success: true,
      message: "Get All Category Successfully",
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Get All Categories",
    });
  }
};

// Getting Single Category
exports.getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    return res.status(200).send({
      success: true,
      message: "Get Single Category Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Category",
    });
  }
};
