const express = require("express");
const router = express.Router();
const Product = require("../models/productModel")
const { createProduct,getAllProducts,getProduct,updateProduct,deleteProduct,getClassicCol, getBreathableCol } = require("../controllers/productController")

router.get("/", getAllProducts);

router.get("/classyCol", getClassicCol);

router.get("/breathableCol", getBreathableCol);

router.get("/:id",getProduct);

router.post("/", createProduct);

router.delete("/:id",deleteProduct);

router.patch("/:id",updateProduct);


module.exports = router;