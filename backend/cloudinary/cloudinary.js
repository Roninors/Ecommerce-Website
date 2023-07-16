require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: "dfepnhz2s", 
    api_key: "694832772881514", 
    api_secret: "3XO-8tGBUL8ASzaQy8m2GkfZUl0",
    secure: true
  });

  const videos = ["../../src/pictures/herofinal.mp4"];

  (async function run(){
    try {
        for(const video of videos){
            const result = await  cloudinary.uploader.upload(video,{
                folder: "myfolder",
                resource_type: "video"
            });
            console.log(result.url);
        }
    } catch (error) {
        console.log(error)
    }
    
    
  })();

  