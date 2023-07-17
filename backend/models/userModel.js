const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

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
        type:String,
        required:false
    }
})

userSchema.statics.signup = async function(username,email,password){
    
    const exists = await this.findOne({email});

    if(exists){
        throw Error("Email already in use");
    }

    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password,salt);

    const user = await this.create({
        username,
        email,
        password:hash
    })

    return user
}

module.exports = mongoose.model("User", userSchema);