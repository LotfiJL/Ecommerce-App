const express = require("express");
const { signin, requireSignin, signup } = require("../../controllers/user");
const { signupp } = require("../../controllers/admin/user");
const router = express.Router();

// Routes

// router.post("/signin", signin);
router.post("/admin/signin", signin);

// router.post("/signup", signup);

router.post("/admin/signup", signupp);

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: "profile" });
// });
// Export

module.exports = router;
