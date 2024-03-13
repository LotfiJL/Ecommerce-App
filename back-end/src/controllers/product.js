const Product = require("../models/Product");
const shortid = require("shortid");
const slugify = require("slugify");
exports.createProductItems = async (request, result) => {
  // result.status(200).json({ file: request.files, body: request.body });

  const { name, price, description, category, quantity, createdBy } =
    request.body;

  if (typeof name !== "string") {
    return result.status(400).json({ error: "name should be a string" });
  }

  let productPictures = [];
  if (request.files.length > 0) {
    productPictures = request.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name, { lower: true }),
    price,
    description,
    quantity,
    productPictures,
    category,
    createdBy: request.user._id,
  });
  try {
    const savedProduct = await product.save();
    result.status(201).json({ product: savedProduct });
  } catch (error) {
    result.status(400).json({ error: error.message });
  }
};
