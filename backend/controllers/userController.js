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
    const {username,email,password,confirmPass} = req.body;

    try {
        const user = await User.signup(username,email,password,confirmPass);

        const token = generateToken(user.id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const addToCart = async(req,res)=>{
        const {email,productId,quantity} = req.body;
        let duplicate = false;
    try {
        
        const user = await User.findOne({email});

        if(!user){
            res.status(404).json({message: "user not found"})
        }
        
        user.cart.forEach((cartDetails)=>{
            if(cartDetails.productId === productId){
                duplicate = true;
            }
        })

        if(duplicate){
            try {
               await User.findOneAndUpdate({email,"cart.productId": productId},{$inc:{"cart.$.quantity" : quantity}},{new:true})

                    res.status(200).json({message: "successfuly updated quantity"})
            } catch (error) {
                res.status(400).json({message: "bad request", error})
            }
            
        }else{
            try {
                await User.findOneAndUpdate({email},{$push:{cart:{
                    productId,quantity
                }}},{new:true})
                res.status(200).json({message: "successfuly added to cart"});

            } catch (error) {
                res.status(400).json({message: "bad request", error})
            }
           
        }
       

            

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports ={
    signupUser,
    loginUser,
    addToCart
}