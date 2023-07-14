const Product = require("../models/productModel");
const mongoose = require("mongoose");


const getAllProducts = async(req,res)=>{
const allProducts = await Product.find({}).sort({createdAt: -1});
res.status(200).json(allProducts);
}

const getClassicCol = async(req,res)=>{

    const classicProducts = await Product.find({productCollection: "classics"}).sort({createdAt: -1});

    if(!classicProducts){
        return res.status(404).json({error: "product not found"})
     }

    res.status(200).json(classicProducts);

}

const getBreathableCol = async(req,res)=>{

    const breathableProducts = await Product.find({productCollection: "breathable"}).sort({createdAt: -1});

    if(!breathableProducts){
        return res.status(404).json({error: "product not found"})
     }

    res.status(200).json(breathableProducts);

}

const getProduct = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "product id is not valid"})
    }

    const product = await Product.findById(id);
    if(!product){
       return res.status(404).json({error: "product not found"})
    }

    res.status(200).json(product);
}

const createProduct = async(req,res) =>{
    const{productName,productPrice,productImgPath,productDescription} = req.body;
    try {
    
        const product = await Product.create({productName,productPrice,productImgPath,productDescription});
        res.status(200).json(product);
    
    } catch (error) {
    
        res.status(400).json(error.message)
    
    }
     
}

const updateProduct = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "product id is not valid"})
    }

    const product = await Product.findOneAndUpdate({_id: id},{ ...req.body});

    
    if(!product){
        return res.status(400).json({error: "product not found"})
     }
 
     res.status(200).json(product);


}


const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "product id is not valid"})
    }

    const product = await Product.findOneAndDelete({_id: id});

    if(!product){
        return res.status(400).json({error: "product not found"})
     }
 
     res.status(200).json(product);

}

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getClassicCol,
    getBreathableCol
}