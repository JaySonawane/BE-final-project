const {validationResult}=require("express-validator");
const Product=module.require('../models/product.js');
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');

module.exports.feedbacks=async (req,res,next)=>
{
   // console.log('hello');
    const id=req.params.prodID;
    const product=await Product.findById(id);
    //console.log('feedbacks');
    console.log(product.Feedbacks);
    res.status(200).json({feedbacks:product.Feedbacks});
}