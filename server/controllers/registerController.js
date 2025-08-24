const TempUser = require('../models/TempUser');
const Otp = require('../models/Otp');
const User = require('../models/User');
const asynchandler = require('express-async-handler');

const register = asynchandler(async(req , res)=>{

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

   

})