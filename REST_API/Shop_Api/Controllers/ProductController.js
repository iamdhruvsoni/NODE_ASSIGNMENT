const ProductModel = require('../Models/ProductModel');

const productList = async (req, res) => {
    const products = await ProductModel.find();
    if (products) {
        res.json({ data: products, msg: "Product List Displayed Successfully!" });
    } else {
        res.json({ error: "Error fetching product list!" });
    }
};

const addProduct = async (req, res) => {
    const { productId, productName, price, stockQuantity, description } = req.body;
    let product;

    if (productId) {
        product = await ProductModel.findByIdAndUpdate(productId, {
            productName,
            price,
            stockQuantity,
            description,
            updatedAt: Date.now()
        }, { new: true });
        if (product) {
            res.json({ msg: "Product updated successfully!", data: product });
        } else {
            res.json({ msg: "Product not found!" });
        }
    } else {
        product = new ProductModel({
            productName,
            price,
            stockQuantity,
            description
        });
        const savedProduct = await product.save();
        if (savedProduct) {
            res.json({ msg: "Product added successfully!", data: savedProduct });
        } else {
            res.json({ error: "Error adding product!" });
        }
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    if (product) {
        res.json({ msg: "Product deleted successfully!" });
    } else {
        res.json({ msg: "Product not found!" });
    }
};

// Edit product
const editProduct = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (product) {
        res.json({ data: product, msg: "Product fetched successfully!" });
    } else {
        res.json({ msg: "Product not found!" });
    }
};

module.exports = { productList, addProduct, deleteProduct, editProduct };
