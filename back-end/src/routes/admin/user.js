const express = require("express");
const { signupp, signin } = require("../../controllers/admin/user");
const {
  validateSignin,
  isValidated,
  validateSignup,
} = require("../../validators/auth");
const router = express.Router();

// Routes

// router.post("/signin", signin);
router.post("/admin/signin", validateSignin, isValidated, signin);
// router.post("/signup", signup);

router.post("/admin/signup", validateSignup, isValidated, signupp);

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: "profile" });
// });
// Export

module.exports = router;
