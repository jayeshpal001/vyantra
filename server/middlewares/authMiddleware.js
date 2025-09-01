const jwt=require("jsonwebtoken")
const User=require("../models/User")
const asyncHandler=require("express-async-handler")
const protect=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        res.status(404)
        throw new Error("user is not authorized or token not found!")
    }
    const decode= await jwt.verify(token,process.env.SECRET_KEY)
    req.user=await User.findByid(decode.id).select("-password"); 
    next()
         
})  
module.exports=protect;