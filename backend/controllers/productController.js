const Product = require("../models/productModel");
const mongoose = require("mongoose");


const getAllProducts = async(req,res)=>{
const allProducts = await Product.find({}).sort({createdAt: -1});
res.status(200).json(allProducts);
}


const getCollection = async(req,res) =>{
    const{productCollection} = req.body;
    try {
    
        const products = await Product.find({productCollection});
        res.status(200).json(products);
    
    } catch (error) {
    
        res.status(400).json(error.message)
    
    }
     
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
    const{productName,productPrice,productImgPath,productDescription,productCollection} = req.body;
    try {
    
        const product = await Product.create({productName,productPrice,productImgPath,productCollection,productDescription});
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
    getCollection
}