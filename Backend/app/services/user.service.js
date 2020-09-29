var userModel = require('../models/user.model')

exports.enquiry = async function (req,res){
    try {
        let user = new userModel({
            name : req.body.name,
            email : req.body.email,
            message : req.body.message
        })
        let userResponse = await userModel.create(user)
        res.send({
            status: userResponse.name+ "Thanks for your interest. We will revert you in 24 hours..!"
        })
        
    } catch (error) {
        res.send(error)    
    }
}