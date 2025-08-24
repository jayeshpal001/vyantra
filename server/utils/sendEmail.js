
const nodemailer=require("nodemailer")
const sendEmail=async(to,subject,html)=>{
    const transporter=nodemailer.createTransport({
        service:"email",
        auth:{
            user:"prashantdhakad1903@gmail.com",
            pass:""
        }
    })
const res=await transporter.sendEmail({
    from:"prashantdhakad1903@gmail.com",
    to:"",
    subject:"",
    html:""
})

}
module.exports=sendEmail;