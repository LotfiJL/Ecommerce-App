const express = require("express");
const { signup } = require("../controllers/user");
const router = express.Router();

// Routes

router.post("/signin", (req, res) => {
  res.send("user");
});

router.post("/signup", signup);

// Export

module.exports = router;
