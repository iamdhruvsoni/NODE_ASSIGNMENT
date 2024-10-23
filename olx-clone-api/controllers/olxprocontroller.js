const ProductModel = require("../models/olxpromodel");

const productList = async (req, res) => {
  const products = await ProductModel.find();
  if (products) {
    res.json({ data: products, msg: "Product List Displayed Successfully!" });
  } else {
    res.json({ error: "Error fetching product list!" });
  }
};

const addProduct = async (req, res) => {
  const { productId, name, cost, details } = req.body;
  let product;

  if (productId) {
    product = await ProductModel.findByIdAndUpdate(
      productId,
      {
        name,
        cost,
        details,
        lastModified: Date.now(),
      },
      { new: true }
    );

    if (product) {
      res.json({ msg: "Product updated successfully!", data: product });
    } else {
      res.json({ msg: "Product not found!" });
    }
  } else {
    product = new ProductModel({
      name,
      cost,
      details,
    });
    const savedProduct = await product.save();

    if (savedProduct) {
      res.json({ msg: "Product added successfully!", data: savedProduct });
    } else {
      res.json({ error: "Error adding product!" });
    }
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findByIdAndDelete(id);

    if (product) {
      res.json({ msg: "Product deleted successfully!" });
    } else {
      res.status(404).json({ msg: "Product not found!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error deleting product!", error });
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, cost, details } = req.body;

  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      {
        name,
        cost,
        details,
        lastModified: Date.now(),
      },
      { new: true }
    );

    if (updatedProduct) {
      res.json({ msg: "Product updated successfully!", data: updatedProduct });
    } else {
      res.status(404).json({ msg: "Product not found!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error updating product!", error });
  }
};

module.exports = { productList, addProduct, deleteProduct, editProduct };
