const jwt = require('jsonwebtoken');

const generateToken = (userId)=>{
   return  jwt.sign(
        { id:userId},
    process.env.SECRET_KEY,
    {expireIn:"7d"}
    )   
}

module.exports = generateToken;