const User = require("../models/userModel")
const jwt = require("jsonwebtoken");

const generateToken = (_id)=>{
  return  jwt.sign({_id}, process.env.JWT_SECRET,{expiresIn: "3d"})
}

const loginUser = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await User.login(email,password);
        const id = user._id;
        const token = generateToken(user.id);

        res.status(200).json({id,email,token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const signupUser = async(req,res)=>{
    const {username,email,password,confirmPass} = req.body;

    try {
        const user = await User.signup(username,email,password,confirmPass);
        const id = user._id;
        const token = generateToken(user.id);

        res.status(200).json({id, email,token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const addToCart = async(req,res)=>{
        const {email,productId,productName,productImgPath,productPrice,quantity} = req.body;
        let duplicate = false;
    try {
        
        const user = await User.findOne({email});

        if(!user){
            res.status(404).json({message: "user not found"})
            return;
        }
        
        user.cart.forEach((cartDetails)=>{
            if(cartDetails.productId === productId){
                duplicate = true;
            }
        })

        if(duplicate){
      
               await User.findOneAndUpdate({email,"cart.productId": productId},{$inc:{"cart.$.quantity" : quantity}},{new:true})

                    res.status(200).json({message: "successfuly updated quantity"})
          
            
        }else{
          
                await User.findOneAndUpdate({email},{$push:{cart:{
                    productId,productName,productImgPath,productPrice,quantity
                }}},{new:true})
                res.status(200).json({message: "successfuly added to cart"});

          
           
        }
       

            

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const deleteItemCart = async(req,res)=>{
    const {email,productId} = req.body;
    try {
       const user = await User.findOneAndUpdate({email},{$pull:{cart:{"productId": productId}}},{ new: true })
        const cart = user.cart;
       res.status(200).json({user});
    } catch (error) {
        res.status(400).json({mssg:error})
    }
}

const getUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const user = await User.findById({_id: id})
        
        if(!user){
            res.status(494).json({message: "user with this email does not exist"});
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports ={
    signupUser,
    loginUser,
    addToCart,
    getUser,
    deleteItemCart
}