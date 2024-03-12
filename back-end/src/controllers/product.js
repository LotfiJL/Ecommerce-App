const Product = require("../models/Product");
const shortid = require("shortid");

exports.createProduct = (req, res) => {
  res.status(200).json({ file: req.file, body: req.body });
};
