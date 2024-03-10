const User = require("../models/user");

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
