const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  details: String,
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
