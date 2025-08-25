const User = require("../models/User");
const asynchandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const Otp = require("../models/Otp");

// ---------------- SEND OTP FOR LOGIN ----------------
exports.sendOtpForLogin = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  // Check user
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  // Verify password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  // Generate OTP
  const otp = crypto.randomInt(1000, 9999);

  // Send OTP
  sendEmail(email, "OTP for Login", `Your OTP is: ${otp}`);

  // Overwrite existing OTP for this email
  await Otp.findOneAndUpdate(
    { email },
    { otp, expiresAt: Date.now() + 5 * 60 * 1000 }, // 5 min expiry
    { upsert: true, new: true }
  );

  res.status(200).json({
    message: "OTP sent successfully",
    user: user.email,
  });
});

// ---------------- VERIFY LOGIN OTP ----------------
exports.verifyLoginOtp = asynchandler(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  // Find OTP record
  const userOtp = await Otp.findOne({ email });
  if (!userOtp) {
    res.status(400);
    throw new Error("OTP not found or expired");
  }

  // Check expiry
  if (Date.now() > userOtp.expiresAt) {
    await Otp.deleteOne({ email });
    res.status(400);
    throw new Error("OTP expired, please request again");
  }

  // Check OTP match
  if (otp != userOtp.otp) {
    res.status(400);
    throw new Error("Invalid OTP");
  }

  // Find user
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  // Generate JWT token
  generateToken(res, user._id);

  // Delete OTP after success
  await Otp.deleteOne({ email });

  res.status(200).json({
    message: "Login successful",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});
