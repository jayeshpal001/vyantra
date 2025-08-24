const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        match: [/\S+@\S+\.\S+/, "plzz enter correct email format"],
        lowercase: true,
        unique: true
    },
    otp: {
        type: String,
        required: [true, "otp is required"]
    }
})


module.exports = mongoose.model("Otp", otpSchema);
