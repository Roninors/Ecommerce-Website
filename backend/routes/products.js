const express = require("express");
const requireAuth = require("../middlewares/requireAuth")
const router = express.Router();
const { createProduct,getAllProducts,getProduct,updateProduct,deleteProduct,getCollection } = require("../controllers/productController")

router.get("/",requireAuth,getAllProducts);

router.post("/collections",requireAuth,getCollection)

router.get("/:id",requireAuth,getProduct);

router.post("/",requireAuth,createProduct);

router.delete("/:id",requireAuth,deleteProduct);

router.patch("/:id",requireAuth,updateProduct);


module.exports = router;
