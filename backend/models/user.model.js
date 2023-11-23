const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    age: {
        type:Number,
        default: 0,
    },
    gender: {
        type: String,
        default: "", 
    },
    country: {
        type: String,
        default: "", 
    },
},
{
    timestamps: true
});

module.exports = mongoose.model("newUser", userSchema);
