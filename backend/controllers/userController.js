const User = require("../models/userModel")
const jwt = require("jsonwebtoken");

const generateToken = (_id)=>{
  return  jwt.sign({_id}, process.env.JWT_SECRET,{expiresIn: "3d"})
}

const loginUser = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await User.login(email,password);

        const token = generateToken(user.id);

        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const signupUser = async(req,res)=>{
    const {username,email,password,confirmPass,cart} = req.body;

    try {
        const user = await User.signup(username,email,password,confirmPass,cart);

        const token = generateToken(user.id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports ={
    signupUser,
    loginUser
}