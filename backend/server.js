require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/products")

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

