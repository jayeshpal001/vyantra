const User = require("../models/User");
const asynchandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const Otp = require("../models/Otp");


exports.sendOtpForLogin = asynchandler(async(req,res)=>{
   const {email, password} = req.body;
    if(!email || !password){
      res.status(400);
      throw new Error("please enter all the fields");
    }
    const user = await User.findOne({email});
    if(!user){
      res.status(400);
      throw new Error("Invalid email or password");
    }   
    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
      res.status(400);
      throw new Error("Invalid email or password");
    }
    const otp = crypto.randomInt(1000,9999);
    sendEmail(email, "otp for login" , `This is your otp ${otp}`);
    await Otp.create({email, otp});
    res.status(200).json({
      message:"otp sent successfully",
      user: user.email
    })
})

exports.verifyLoginOtp = asynchandler(async(req,res)=>{
   const{email, otp} = req.body;
    if(!email || !otp){
        res.status(400);
        throw new Error("please enter all the fields");
    }
    const userOtp = await Otp.findOne({email});
    if(!userOtp){
      res.status(400);
      throw new Error("Invalid email or otp");
    }   
    if(otp !== userOtp.otp){
      res.status(400);
      throw new Error("Invalid email or otp");
    }
    const user = await User.findOne({email});
    if(!user){
      res.status(400);
      throw new Error("User not found");
    }
    generateToken(res, user._id);
    await userOtp.deleteOne({email});   
    res.status(200).json({
      message:"login successfully",
      user:{
        _id:user._id,
        name:user.name,
        email:user.email,
      }
    })

});