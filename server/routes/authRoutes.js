const express = require('express');
const router = express.Router();
const {sentOtpForRegister , verifyRegister} = require("../controllers/registerController");
const { sendOtpForLogin } = require('../controllers/loginController');
const { verifyLoginOtp } = require('../controllers/loginController');
const userProfile = require('../controllers/userProfile');
const protect = require('../middlewares/authMiddleware');
const logoutController = require('../controllers/logOutController');

router.post('/register/sendOtp' , sentOtpForRegister);
router.post('/register/verifyOtp' , verifyRegister);
router.post('/login/sendOtp' , sendOtpForLogin);
router.post('/login/verifyOtp' , verifyLoginOtp);
router.get('/profile', protect, userProfile); 
router.get('/logout', logoutController)

module.exports = router;