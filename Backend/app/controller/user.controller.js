var userService = require('../services/user.service')

exports.enquiry = function(req,res){
    try {
        req.assert('name','name can not be blanck').notEmpty();
        req.assert('email','email can not be invalid').isEmail();
        req.assert('message','message can not be blanck').notEmpty();

        var errors = req.validationErrors();
        if (errors) {
            return res.status(400).send(errors);
        } else {
            userService.enquiry(req,res);
        }

    } catch (error) {
        
    }
}