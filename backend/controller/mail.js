var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({                                                                                                                              
    host: 'smtp.gmail.com',
    port: 465,
  service: 'gmail',
  secure: true,
  secureConnection: false,
  auth: {
    user: 'sponda.netclues@gmail.com',
    pass: 'qzfm wlmf ukeq rvvb'
  }
});

var mailOptions = {
  from: 'sponda.netclues@gmail.com',
  to: 'savanponda11@gmail.com',
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