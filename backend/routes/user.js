const express = require("express");
const {signupUser,loginUser,addToCart} = require("../controllers/userController")
const router = express.Router();

router.post("/login",loginUser);
router.post("/signup",signupUser);
router.post("/toCart",addToCart);

module.exports = router;