const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
    name:{
     type:String,
     required:[true,"Name is required"],
     minlength:[3, "Name must be 3 length"]
    },
    email:{
      type:String,
      required:[true,"email is required"],
      match:[/\S+@\S+.\+S/,"plzz enter correct email format"],
      unique:true
    },
     password:{
          type:String,
          required:[true, "password is required"],
          minlength:[6 , "password must be atleast length 6"]
    }
})

 
module.exports = mongoose.model("TempUser", userSchema);
 