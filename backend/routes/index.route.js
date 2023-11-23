// index.route.js
const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");

router.use("/newUsers", userRoute);  // Changed route to use() instead of route()

module.exports = router;
