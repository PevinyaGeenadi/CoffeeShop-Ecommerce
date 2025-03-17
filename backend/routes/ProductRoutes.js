const express = require("express");
const { addProduct, getProducts } = require("../controller/ProductController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Image upload setup
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

// Serve uploaded images
router.use("/images", express.static("upload/images"));

// Upload image route
router.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`,
    });
});

// Product routes
router.post("/addProduct", addProduct);
router.get("/products", getProducts);

module.exports = router;
