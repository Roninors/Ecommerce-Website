const express = require("express");
const {signupUser,loginUser,addToCart,getUser} = require("../controllers/userController")
const router = express.Router();

router.post("/login",loginUser);
router.post("/signup",signupUser);
router.post("/toCart",addToCart);
router.get("/:id",getUser);

module.exports = router;