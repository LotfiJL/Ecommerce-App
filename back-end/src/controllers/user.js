const User = require("../models/user");
const jwt = require("jsonwebtoken");

// signup
exports.signup = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already registered", user: existingUser });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "succsfullu signed up", savedUser });
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
      if (found.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: found._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { firstName, lastName, role, fullName } = found;

        res.status(200).json({
          message: "succssfully signed in",
          token,
          user: { firstName, lastName, email, role, fullName },
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
