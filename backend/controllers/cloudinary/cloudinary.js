require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: pro, 
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
    
    
  })();