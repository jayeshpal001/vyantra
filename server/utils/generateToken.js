const jwt = require('jsonwebtoken');

const generateToken = (userId)=>{
   const token = jwt.sign(
        { id:userId},
    process.env.SECRET_KEY,
    {expireIn:"7d"}
    ) 

    res.cookie("jwt",token , {
      httpOnly:true,
      secure:true,
      sameSite:"none",
      maxAge:7*24*60*60*1000
    }); 
    return token;
}

 

module.exports = generateToken;