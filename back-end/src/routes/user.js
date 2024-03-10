const express = require("express");
const { signup, signin, requireSignin } = require("../controllers/user");
const router = express.Router();

// Routes

router.post("/signin", signin);

router.post("/signup", signup);
router.post("/profile", requireSignin, (req, res) => {
  res.status(200).json({ user: "profile" });
});
// Export

module.exports = router;
