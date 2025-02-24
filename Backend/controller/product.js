const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/get-products", (req, res) => {
  res.json({
    message: "Get all products",
  });
});

// Endpoint to create a new product
router.post("/create-product", async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    // Validate required fields
    if (!name || !description || !price || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({
      name,
      description,
      price,
      imageUrl,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
