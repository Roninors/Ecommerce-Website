const express = require("express");
const {signupUser,loginUser,addToCart,getUser,deleteItemCart} = require("../controllers/userController")
const requireAuth = require("../middlewares/requireAuth")
const router = express.Router();

router.post("/login",loginUser);
router.post("/signup",signupUser);
router.post("/toCart",requireAuth,addToCart);
router.post("/deleteItem",requireAuth,deleteItemCart);
router.get("/:id",requireAuth,getUser);

module.exports = router;