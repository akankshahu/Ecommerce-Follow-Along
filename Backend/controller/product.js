const express = require("express");
const router = express.Router();

router.get("/get-products", (req, res) => {
  res.json({
    message: "Get all products",
  });
});

module.exports = router;
