const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SECRET);
      console.log("the user is", user);
      req.user = { ...user, role: "user" };
      console.log("the req.user is", req.user);
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized access" });
    }
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  console.log("everything is good");
  next();
};

exports.userMiddleware = (req, res, next) => {
  console.log("req is ", req.user);
  if (req.user.role != "user") {
    return res.status(400).json({ message: "User access denied" });
  }
  next();
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "Admin access denied" });
  }
  next();
};
