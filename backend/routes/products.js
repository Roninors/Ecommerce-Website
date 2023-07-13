const express = require("express");
const router = express.Router();
const Product = require("../models/productModel")

router.get("/", (req,res)=>{
    
res.json({mssg:"get request"});

});

router.get("/:id",(req,res)=>{

    res.json({mssg:"get specific request"});
    
});

router.post("/", async (req,res)=>{
    const{productName,productPrice} = req.body;
try {

    const product = await Product.create({productName,productPrice});
    res.status(200).json(product);

} catch (error) {

    res.status(400).json(error.message)

}
    res.json({mssg: "post new product"});
})

router.delete("/:id",(req,res)=>{

    res.json({mssg:"delete specific request"});
    
});

router.patch("/:id",(req,res)=>{

    res.json({mssg:"patch specific request"});
    
});


module.exports = router;