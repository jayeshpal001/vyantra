const asyncHandler = require("express-async-handler")
const Otp=require("../models/Otp")
const User=require("../models/User")

const sendOtpForLogin=asyncHandler()