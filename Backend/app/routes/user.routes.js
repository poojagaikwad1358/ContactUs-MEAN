var express = require('express')
const router = express.Router();
expressValidator = require('express-validator')
var userController = require('../controller/user.controller');
router.use(expressValidator());

router.post('/enquiry',userController.enquiry);
module.exports=router;