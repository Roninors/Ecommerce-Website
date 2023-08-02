const express = require("express");
const {payStripe} = require("../controllers/stripeController")
const router = express.Router();

router.post("/create-checkout-session",payStripe)

module.exports = router;