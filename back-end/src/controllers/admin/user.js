const User = require("../../models/user");
const jwt = require("jsonwebtoken");

// signup}
// signup
exports.signupp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "admin already registered", user: existingUser });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
      role: "admin",
    });

    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "Admin successfully signed up", savedUser });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const found = await User.findOne({ email });
    if (!found)
      return res.status(400).json({ message: "User Email not found" });
    else {
      if (found.authenticate(req.body.password) && found.role === "admin") {
        const token = jwt.sign({ _id: found._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { _id, firstName, lastName, role, fullName } = found;

        res.status(200).json({
          message: "succssfully signed in",
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        return res.status(400).json({ message: "This is invalid password" });
      }
    }
  } catch {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// signin

exports.requireSignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user;
  // jwt.decode
  next();
};
