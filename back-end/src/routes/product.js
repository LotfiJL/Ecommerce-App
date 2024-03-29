const express = require("express");
const { requireSignin, adminMiddleware } = require("../C-middleware");
const { createProductItems } = require("../controllers/product");
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploader"));
  },

  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("product_image"),
  createProductItems
);
// router.get("/category/getCategory", getCategories);
module.exports = router;
