require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_KEY);

const payStripe = async (req, res) => {
    const {userCart} = req.body;
    try {
        const line_items = userCart.map((item)=>{
            return{
                    price_data: {
                        currency: "usd",
                        product_data:{
                            name: item.productName,
                            images: [item.productImage],
                            metadata:{
                                id:item.productId
                            },
                        },
                        unit_amount:item.productPrice *100,
                    },
                    quantity:item.quantity,
                
        }
    })
       
        const session = await stripe.checkout.sessions.create({
         line_items,
          mode: 'payment',
          success_url: `${process.env.CLIENT_URL}/`,
          cancel_url: `${process.env.CLIENT_URL}/cart`,
        });
      
        res.send({url: session.url});
    } catch (error) {
        console.log(error)
    }
   
  };

  module.exports = {payStripe}