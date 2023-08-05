const express = require("express");
const {payStripe} = require("../controllers/stripeController")
const requireAuth = require("../middlewares/requireAuth")
const router = express.Router();
router.use(requireAuth)
router.post("/create-checkout-session",payStripe)

module.exports = router;