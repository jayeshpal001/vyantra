const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
    email:{
    type:String,
    required:[true,"email is required"],
    match:[/\S+@\S+.\+S/,"plzz enter correct email format"],
    unique:true
    },
     otp:{
          type:String,
          required:[true, "otp is required"]     
    }
})

 
module.exports = mongoose.model("Otp", userSchema);
 