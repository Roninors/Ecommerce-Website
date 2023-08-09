require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const stripeRoutes = require("./routes/stripe")
const cors = require("cors");

const app = express();
app.use(cors(
   {
  origin: 'https://ecommerce-website-gvr1ww2rs-roninors.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}
));


//MIDDLEWARES
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//ROUTES

app.use("/products",productRoutes);
app.use("/user",userRoutes);
app.use("/stripe",stripeRoutes);

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


 
