const TempUser = require('../models/TempUser');
const Otp = require('../models/Otp');
const User = require('../models/User');
const asynchandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const crypto = required('crypto');

exports.sentOtpForRegister = asynchandler(async(req , res)=>{

   const{name , email ,password} = req.body;

   if(!name || !email || !password){
      res.status(400);
      throw new Error("plzz enter all the fields");
   }

   const user = await User.findOne({email});

   if(user){
    res.status(400);
    throw new Error("User already exist");
   }
 
   const otp = crypto.randomInt(1000,9999);   
   
   sentEmail(email, "otp for Registration" , `This is your otp ${otp}`);

   const hashedPass = await bcrypt.hash(passoword , 10);

   await Otp.create({email, otp});

   const data = await TempUser.create({name,email, password:hashedPass});

   res.status(200).json({
    message:"email sent successfully",
    user:data.email
   })   
})

 