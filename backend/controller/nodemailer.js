const nodemailer = require("nodemailer"); 

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  service: 'gmail',
  secure: true,
  auth: {
    user: 'savanthakkr11@gmail.com', 
    pass: 'Savan2003@'
  }
});

var mailOptions = {
  from: 'savanthakkr11@gmail.com',
  to: 'savanponda11@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});