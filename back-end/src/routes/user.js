const express = require("express");
const { signup, signin } = require("../controllers/user");
const router = express.Router();

// Routes

router.post("/signin", signin);

router.post("/signup", signup);

// Export

module.exports = router;
