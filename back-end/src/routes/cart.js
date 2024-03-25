const express = require("express");
const { addTocart } = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../C-middleware");
const router = express.Router();

router.post("/user/cart/addTocart", requireSignin, userMiddleware, addTocart);
module.exports = router;
