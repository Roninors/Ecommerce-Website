const express = require("express");
const router = express.Router();
const { createProduct,getAllProducts,getProduct,updateProduct,deleteProduct,getCollection } = require("../controllers/productController")

router.get("/", getAllProducts);

router.post("/collections",getCollection)

router.get("/:id",getProduct);

router.post("/", createProduct);

router.delete("/:id",deleteProduct);

router.patch("/:id",updateProduct);


module.exports = router;