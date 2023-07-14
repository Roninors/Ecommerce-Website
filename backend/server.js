require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/products");
const cloudinary = require("cloudinary").v2;

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


//cloudinary
cloudinary.config({ 
    cloud_name: 'dfepnhz2s', 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

  const image = "../src/pictures/brown-bag.jpg";

  (async function run(){
    const result = await  cloudinary.uploader.upload(image,{
        folder: "myfolder"
    });
    console.log(result.url);
  })();
 