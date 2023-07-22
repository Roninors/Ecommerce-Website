
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: "dfepnhz2s", 
    api_key: "694832772881514", 
    api_secret: "3XO-8tGBUL8ASzaQy8m2GkfZUl0",
    secure: true
  });

  const images = ["../../src/pictures/shop-banner4.jpg", "../../src/pictures/register-banner.jpg"];

  (async function run(){
    try {
        for(const image of images){
            const result = await  cloudinary.uploader.upload(image);
            console.log(result.url);
        }
    } catch (error) {
        console.log(error)
    }
    
    
  })();

  