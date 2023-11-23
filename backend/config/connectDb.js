const mongoose = require("mongoose");


const connectDB = async () => {
    await mongoose.connect("mongodb+srv://shavaizali:03554822798@cluster0.lzqjwp0.mongodb.net/");
    console.log("mongo db connected successfully");
};

module.exports = connectDB;