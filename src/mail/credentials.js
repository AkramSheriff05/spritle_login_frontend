const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akramsheriff05042000@gmail.com',
    pass: '9962343038'
  }
})

const welcomeMail =(email,name)=> {
    transporter.sendMail({
  from: 'akramsheriff05042000@gmail.com',
  to: email,
  subject: 'Thanks for joining in',
  text: `welcome to app ${name} 


  this is a beta version
        from 
        Akram sheriff(developer) `
    })
}

module.exports=welcomeMail

