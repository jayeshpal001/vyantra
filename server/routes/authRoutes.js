const express = require('express');
const router = express.Router();
const sentOtpForRegister = require('../controller/sentOtpForRegister');

router.post('/register/sentOtp' , sentOtpForRegister);

module.exports = router;