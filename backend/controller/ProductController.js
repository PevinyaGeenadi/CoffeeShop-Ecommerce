const Product = require("../models/Product");

// Add a new product
exports.addProduct = async (req, res) => {
    const { id, name, image, category, new_price, old_price, available } = req.body;

    try {
        const product = new Product({
            id,
            name,
            image,
            category,
            new_price,
            old_price,
            available,
        });

        await product.save();
        res.status(201).json({ success: 1, message: "Product added successfully!" });
    } catch (error) {
        res.status(500).json({ success: 0, message: "Error: " + error });
    }
};

// Fetch all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ success: 0, message: "Error: " + error });
    }
};
