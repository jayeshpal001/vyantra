const express = require('express');
const router = express.Router();
const {sentOtpForRegister , verifyRegister} = require("../controllers/registerController");
 

router.post('/register/sendOtp' , sentOtpForRegister);
router.post('/register/verifyOtp' , verifyRegister);

module.exports = router;