const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shopping")
  .then(() => console.log("Connected to the Database!"));

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stockQuantity: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
