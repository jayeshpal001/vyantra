const TempUser = require('../models/TempUser');
const Otp = require('../models/Otp');
const User = require('../models/User');
const asynchandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

// ------------------ SEND OTP ------------------
exports.sentOtpForRegister = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Generate random 4 digit OTP
  const otp = crypto.randomInt(1000, 9999);

  // Send OTP to user
  sendEmail(email, "OTP for Registration", `Your OTP is: ${otp}`);

  // Hash password for storing temporarily
  const hashedPass = await bcrypt.hash(password, 10);

  // Overwrite old OTP if exists
  await Otp.findOneAndUpdate(
    { email },
    { otp, expiresAt: Date.now() + 5 * 60 * 1000 }, // OTP valid for 5 mins
    { upsert: true, new: true }
  );

  // Overwrite old temp user if exists
  await TempUser.findOneAndUpdate(
    { email },
    { name, email, password: hashedPass },
    { upsert: true, new: true }
  );

  res.status(200).json({
    message: "OTP sent successfully",
    user: email,
  });
});

// ------------------ VERIFY OTP ------------------
exports.verifyRegister = asynchandler(async (req, res) => {
  const { email, otp } = req.body;

  const tempUser = await TempUser.findOne({ email });
  if (!tempUser) {
    res.status(400);
    throw new Error("Your email is not registered");
  }

  // Fetch latest OTP
  const isOtp = await Otp.findOne({ email });
  if (!isOtp) {
    res.status(400);
    throw new Error("OTP not found, please request again");
  }

  // Check expiry
  if (Date.now() > isOtp.expiresAt) {
    await isOtp.deleteOne({ email });
    res.status(400);
    throw new Error("OTP expired, please request again");
  }

  // Compare OTP (plain text)
  if (otp != isOtp.otp) {
    res.status(400);
    throw new Error("Invalid OTP");
  }

  // Create permanent user
  const user = await User.create({
    name: tempUser.name,
    email: tempUser.email,
    password: tempUser.password,
  });

  // Delete temp user + OTP after success
  await TempUser.deleteOne({ email });
  await Otp.deleteOne({ email });

  res.json({
    message: "Registration successful",
    user,
  });
});
