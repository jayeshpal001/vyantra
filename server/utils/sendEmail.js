
const nodemailer = require("nodemailer")

const sendEmail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "prashantdhakad1903@gmail.com",
            pass: "hxvuxarrttcwfrts"
        }
    })
    const res = await transporter.sendMail({
        from: "prashantdhakad1903@gmail.com",
        to,
        subject,
        html
    })
   console.log("Email sent successfully: ", to);
   
}
module.exports = sendEmail;