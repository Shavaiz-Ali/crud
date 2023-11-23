const User = require("../models/user.model");


// controller to create a new user
exports.store = async (req, res) => {
    try {
        const payload  = req.body;
        const user = await User.create(payload);
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}

// controller 2 fetch all user
exports.index = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}

// controller 3 fetch single user
exports.get = async (req, res) => {
    try {
        const {id} = req.params
        const contact = await User.findOne({_id:id});
        if(!contact){
            res.json({status:400, message:"No User Found",})
        }
        res.json({status:200, message:"user found successfully ", contact})
    } catch (error) {
        console.log(error);
    }
}
// controller 4 delete user
exports.destroy = async (req, res) => {
    try {
        const {id} = req.params
        const contact = await User.findOneAndDelete({_id:id});
        if(!contact){
            res.json({status:400, message:"No User Found to delete",})
        }
        res.json({status:200, message:"user deleted successfully ", contact})
    } catch (error) {
        console.log(error);
    }
}
// controller 5 edit user
exports.update = async (req, res) => {
    try {
        res.json("edit single user")
    } catch (error) {
        console.log(error);
    }
}