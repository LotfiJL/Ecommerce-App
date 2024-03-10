const express = require("express");
const app = express();
const env = require("dotenv");
app.use(express.json());
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { connect } = require("./connect/connectDB");

require("dotenv").config();

const userRoutes = require("./routes/user");

connect();

env.config();
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

mongoose.connect(process.env.DB_URI);
// mongodb+srv://LotfiJellali:<password>@cluster0.85j9hcv.mongodb.net/
//Username LotfiJellali
//Password Lotfi123
