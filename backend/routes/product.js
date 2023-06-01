const express = module.require('express');
const router = express.Router();
const { body } = module.require('express-validator')
const productcontroller = require('../controller/product.js');


router.get('/:prodID',productcontroller.feedbacks);

module.exports=router;