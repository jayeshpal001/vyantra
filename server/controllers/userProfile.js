const asyncHandler=require("express-async-handler")
const userProfile=asyncHandler(async(req,res)=>{
if(!req.user){
res.status(401)
throw new Error("user is not exist")
}
res.status(200).json({
    user:req.user
})
})
module.exports=userProfile