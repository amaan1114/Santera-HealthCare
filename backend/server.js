const express = require('express');
const app = express();
const nodemailer=require('nodemailer');
const axios=require('axios');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Server Up');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
app.post('/sendemail',async (req,res)=>{
    const data = req.body;
    console.log(data.email);
    let transporter= await nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        secure:false,
        auth:{
            user: 'greg20@ethereal.email',
        pass: 'YmPchHkpsfZh5DT1XU'
        }
    });
    let info = await transporter.sendMail({
        from:"Sentro Health Care",
        to:data.email,
        subject:"Contact Request Received",
        text:`Hello ${data.name},\n\nThank you for reaching out to Sentro Health Care. We have received your message and will get back to you shortly.\n\nBest regards,\nSentro Health Care Team`,
        
        
    },)
    console.log("Message sent: %s",data.email);
    res.status(200).json({message:'Email Sent'});
});