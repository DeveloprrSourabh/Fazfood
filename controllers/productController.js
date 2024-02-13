const Product = require("../models/productModel");
const fs = require("fs");
const slugify = require("slugify");
exports.addProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      quantity,
      category,
      offer,
      arrived,
      slug,
    } = req.fields;
    const { photo } = req.files;
    if (!name) {
      return res.status(200).send({
        succes: false,
        message: "Name Is required",
      });
    }
    if (!description) {
      return res.status(200).send({
        succes: false,
        message: "Description Is required",
      });
    }
    if (!price) {
      return res.status(200).send({
        succes: false,
        message: "Price Is required",
      });
    }
    if (!offer) {
      return res.status(200).send({
        succes: false,
        message: "Offer Is required",
      });
    }
    if (!quantity) {
      return res.status(200).send({
        succes: false,
        message: "Quantity Is required",
      });
    }
    if (!photo) {
      return res.status(200).send({
        succes: false,
        message: "Photo Is required",
      });
    }
    let product = await Product({
      ...req.fields,
      slug: slugify(name),
    });
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    return res.status(200).send({
      success: true,
      message: "Product Added Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Product",
    });
  }
};

// Update Product Controller
exports.updateProductController = async (req, res) => {
  try {
    const { name, description, price, quantity, category, offer, slug } =
      req.fields;
    const { id } = req.params;
    const { photo } = req.files;
    if (!name) {
      return res.status(200).send({
        succes: false,
        message: "Name Is required",
      });
    }
    if (!description) {
      return res.status(200).send({
        succes: false,
        message: "Description Is required",
      });
    }
    if (!price) {
      return res.status(200).send({
        succes: false,
        message: "Price Is required",
      });
    }
    if (!offer) {
      return res.status(200).send({
        succes: false,
        message: "Offer Is required",
      });
    }
    if (!quantity) {
      return res.status(200).send({
        succes: false,
        message: "Quantity Is required",
      });
    }
    if (!photo) {
      return res.status(200).send({
        succes: false,
        message: "Photo Is required",
      });
    }
    const existsProduct = await Product.findById(id);
    if (existsProduct.slug == slug) {
      return res.status(400).send({
        success: false,
        message: "Choose Different Product Name",
      });
    }
    let product = await Product.findByIdAndUpdate(
      id,
      {
        ...req.fields,
        slug: slugify(name),
      },
      { new: true }
    );
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    return res.status(200).send({
      success: true,
      message: "Product Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating Product",
    });
  }
};

// Delete Product Controller
exports.deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting Proudct",
    });
  }
};
// Getting All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).send({
      success: false,
      message: "All Products Get Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting All Products",
    });
  }
};

// Getting Single Product
exports.getSingleProduct = async (erq, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).send({
      success: true,
      message: "Get Single Product Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Product",
    });
  }
};
