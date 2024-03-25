const express = require("express");
const app = express();
const env = require("dotenv");
app.use(express.json());
const mongoose = require("mongoose");
const { connect } = require("./connect/connectDB");
const categoryRoutes = require("./routes/category");
require("dotenv").config();

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

connect();

env.config();
app.use(express.urlencoded({ extended: true }));
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
