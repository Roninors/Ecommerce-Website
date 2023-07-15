require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const productRoutes = require("./routes/products");
const cors = require("cors");

const app = express();
app.use(cors());


//MIDDLEWARES
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//ROUTES

app.use("/products",productRoutes);

//connect db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    //LISTEN FOR REQUESTS
app.listen(process.env.PORT, ()=>{
    console.log("connected to DB and listening on port", process.env.PORT);
});

})
.catch((error)=>{
    console.log(error)
})

/*
//cloudinary
cloudinary.config({ 
    cloud_name: 'dfepnhz2s', 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

  const images = ["../src/pictures/banner2.jpg","../src/pictures/partner-black.jpg","../src/pictures/woman-white.jpg"];

  (async function run(){
    try {
        for(const image of images){
            const result = await  cloudinary.uploader.upload(image,{
                folder: "myfolder"
            });
            console.log(result.url);
        }
    } catch (error) {
        console.log(error)
    }
    
    
  })();*/
 