const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type: String,
        required:true
    },
    productPrice:{
        type: Number,
        required:true
    },
    productImgPath:{
        type: String,
        required:true
    },
    productDescription:{
        type: String,
        required:true
    }
},{ timestamps: true })

module.exports = mongoose.model("Product",productSchema);