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
  subject: 'Thanks for Logging  in Akram code test app from spritle',
  text: `welcome  ${ name } 
      

       This is a beta version
        
  
  
  
  
  
        regards,
        Akram sheriff(developer) `
    })
}


module.exports={
    welcomeMail
  
}
