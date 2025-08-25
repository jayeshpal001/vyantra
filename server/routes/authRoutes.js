const express = require('express');
const router = express.Router();
const {sentOtpForRegister , verifyRegister} = require("../controllers/registerController");
const { sendOtpForLogin } = require('../controllers/loginController');
const { verifyLoginOtp } = require('../controllers/loginController');

router.post('/register/sendOtp' , sentOtpForRegister);
router.post('/register/verifyOtp' , verifyRegister);
router.post('/login/sendOtp' , sendOtpForLogin);
router.post('/login/verifyOtp' , verifyLoginOtp);

module.exports = router;