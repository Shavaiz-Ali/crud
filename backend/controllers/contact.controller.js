const Contact = require("../models/contact.model");


// controller to create a new user
exports.store = async (req, res) => {
    try {
        const payload  = req.body;
        const contact = await Contact.create(payload);
        res.json({status: 200, success:true, message: "messaege send successfully", contact});
    } catch (error) {
        console.log(error);
    }
};

// controller 2 fetch all user
exports.index = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.json({status: 200, success:true, message: "contact found successfully", contact});
    } catch (error) {
        console.log(error);
    }
}

// controller 3 fetch single user
exports.get = async (req, res) => {
    try {
        const {id} = req.params
        const contact = await Contact.findOne({_id:id});
        if(!contact){
          return  res.json({status:404, success:false,  message:"No User Found",})
        }
        res.json({status:200, success:true, message:"user found successfully ", contact})
    } catch (error) {
        console.log(error);
    }
}
// controller 4 delete user
exports.destroy = async (req, res) => {
    try {
        const {id} = req.params
        const contact = await Contact.findOneAndDelete({_id:id});
        if(!contact){
            res.json({status:400, success:false, message:"No User Found to delete",})
        }
        res.json({status:200, success:true, message:"user deleted successfully ", contact})
    } catch (error) {
        console.log(error);
    }
}
// controller 5 edit user
// controller 5 edit user
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;  // Fields to update and their new values
        const contact = await Contact.findOneAndUpdate({ _id: id }, payload, { new: true });
        if (!contact) {
            return res.json({ status: 400, success: false, message: "No User found to update" });
        }

        res.json({ status: 200, success: true, message: "User updated successfully", contact });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, success: false, message: "Internal Server Error" });
    }
}
