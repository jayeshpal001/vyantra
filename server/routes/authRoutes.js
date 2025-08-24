const express = require('express');
const router = express.Router();
const {sentOtpForRegister} = require("../controllers/registerController");

router.post('/register/sendOtp' , sentOtpForRegister);

module.exports = router;