const express = require("express");
const { signup, signin } = require("../controllers/user");
const router = express.Router();
const {
  validateSignup,
  validateSignin,
  isValidated,
} = require("../validators/auth");
// Routes

router.post("/signin", validateSignin, isValidated, signin);

router.post("/signup", validateSignup, isValidated, signup);
// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: "profile" });
// });
// Export

module.exports = router;
