const CategoryModel = require('../Models/CategoryModel');

const categoryList = async (req, res) => {
    const categories = await CategoryModel.find();
    if (categories) {
        res.json({ data: categories, msg: "Category List Displayed Successfully!" });
    } else {
        res.json({ error: "Error fetching category list!" });
    }
};

const addCategory = async (req, res) => {
    const { categoryId, categoryName, description } = req.body;
    let category;

    if (categoryId) {
        category = await CategoryModel.findByIdAndUpdate(
            categoryId,
            { categoryName, description, updatedAt: Date.now() },
            { new: true }
        );
        if (category) {
            res.json({ msg: "Category updated successfully!", data: category });
        } else {
            res.json({ msg: "Category not found!" });
        }
    } else {
        category = new CategoryModel({ categoryName, description });
        const savedCategory = await category.save();
        if (savedCategory) {
            res.json({ msg: "Category added successfully!", data: savedCategory });
        } else {
            res.json({ error: "Error adding category!" });
        }
    }
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndDelete(id);
    if (category) {
        res.json({ msg: "Category deleted successfully!" });
    } else {
        res.json({ msg: "Category not found!" });
    }
};

const editCategory = async (req, res) => {
    const { id } = req.params;
    const { categoryName, description } = req.body;
    
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
        id,
        { categoryName, description, updatedAt: Date.now() },
        { new: true }
    );

    if (updatedCategory) {
        res.json({ msg: "Category updated successfully!", data: updatedCategory });
    } else {
        res.json({ msg: "Category not found!" });
    }
};

module.exports = { categoryList, addCategory, deleteCategory, editCategory };
