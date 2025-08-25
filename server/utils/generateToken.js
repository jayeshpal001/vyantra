const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
    const token = jwt.sign(
        { id: userId },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
}

module.exports = generateToken;