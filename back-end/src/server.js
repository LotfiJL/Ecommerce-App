const express = require("express");
const app = express();
const env = require("dotenv");

const mongoose = require("mongoose");
const { connect } = require("./connect/connectDB");
const categoryRoutes = require("./routes/category");
const path = require("path");
require("dotenv").config();

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
app.use(express.json());
connect();

env.config();
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

mongoose.connect(process.env.DB_URI);
// mongodb+srv://LotfiJellali:<password>@cluster0.85j9hcv.mongodb.net/
//Username LotfiJellali
//Password Lotfi123
