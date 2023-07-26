
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: "dfepnhz2s", 
    api_key: "694832772881514", 
    api_secret: "3XO-8tGBUL8ASzaQy8m2GkfZUl0",
    secure: true
  });

  const images = ["../../src/pictures/black-polo.jpg","../../src/pictures/black-jogger.jpg","../../src/pictures/blue-buttoned-shorts.jpg","../../src/pictures/blue-shorts.jpg","../../src/pictures/Dress.jpg","../../src/pictures/electro-sunglasses.jpg","../../src/pictures/jeans.jpg","../../src/pictures/sassy-sunglasses.jpg"];

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

  