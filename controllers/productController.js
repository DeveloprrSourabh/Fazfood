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
    if (!quantity) {
      return res.status(200).send({
        succes: false,
        message: "Quantity Is required",
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
