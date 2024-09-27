const express = require('express');
const router = express.Router();

const { productList, addProduct, editProduct, deleteProduct } = require('../Controllers/ProductController');
const { categoryList, addCategory, editCategory, deleteCategory } = require('../Controllers/CategoryController');


router.get('/products', productList);
router.post('/products/add', addProduct);
router.patch('/products/edit/:id', editProduct);
router.delete('/products/delete/:id', deleteProduct);


router.get('/categories', categoryList);
router.post('/categories/add', addCategory);
router.patch('/categories/edit/:id', editCategory);
router.delete('/categories/delete/:id', deleteCategory);

module.exports = router;
