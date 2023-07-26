const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    cart:{
        type:Array,
        default: []
    }
})

userSchema.statics.signup = async function(username,email,password,confirmPass){


    if(!username || !email || !password || !confirmPass){
        throw Error("All fields must be filled");
    }
    
    if(confirmPass !== password){
        throw Error("password does not match");
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough");
    }

    const exists = await this.findOne({email});

    if(exists){
        throw Error("Email already in use");
    }

    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password,salt);

    const user = await this.create({
        username,
        email,
        password:hash,
        cart: []
    })

    return user
}

userSchema.statics.login = async function(email,password){

    const user = await this.findOne({email});

    if(!user){
        throw Error("Incorrect email");
    }

    const matchPassword = await bycrypt.compare(password, user.password);

    if(!matchPassword){
        throw Error("Incorrect password");
    }

    return user
    
}

module.exports = mongoose.model("User", userSchema);