const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
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

transporter.verify((err, success) => {
	err
		? console.log(err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {


  

	let mailOptions = {
		from: `${req.body.mailerState.email}`,
		to: 'savanponda11@gmail.com',
		subject: `Message from: ${req.body.mailerState.email}`,
		text: `${req.body.mailerState.message}`,
		attachments: [
			{
			  filename: `${req.body.mailerState.profile_pic}`,
			  content: `${req.body.mailerState.profile_pic.data}`,
			//   contentType: `image/${profile_pic}`,
			},
		]
	};


	// if (req.files && req.files.attachment) {
	//   let attachment = req.files.attachment;
  
	//   // Validate file format
	//   const allowedFormats = ['png', 'jpg', 'jpeg'];
	//   const format = attachment.name.split('.').pop();
	//   if (!allowedFormats.includes(format)) {
	// 	return res.status(400).json({
	// 	  status: "fail",
	// 	  message: "Invalid file format. Only PDF, JPG and JPEG are allowed.",
	// 	});
	//   }
  
	//   // Add attachment to mailOptions
	//   mailOptions.attachments = [
	// 	{
	// 	  filename: attachment.name,
	// 	  content: attachment.data,
	// 	  contentType: `image/${format}`,
	// 	},
	//   ];
	// }

	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
		  res.json({
			status: "fail",
		  });
		} else {
		  console.log("== Message Sent ==");
		  res.json({
			status: "success",
		  });
		}
	  });
});


// in this api i want to share user selected attechment on mail and also please add validation only pdf and jpg and jpeg formet avllow 

const port = 3001;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});



// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// const cors = require("cors");
// app.use(express.json());
// app.use(cors());

// let transporter = nodemailer.createTransport({
// 	host: 'smtp.gmail.com',
// 	port: 465,
// 	service: 'gmail',
// 	secure: true,
// 	secureConnection: false,
// 	auth: {
// 		user: 'sponda.netclues@gmail.com',
// 		pass: 'qzfm wlmf ukeq rvvb'
// 	}
// });

// transporter.verify((err, success) => {
// 	err
// 		? console.log(err)
// 		: console.log(`=== Server is ready to take messages: ${success} ===`);
// });

// app.post("/send", function (req, res) {
// 	let mailOptions = {
// 	  from: "sponda.netclues@gmail.com",
// 	  to: 'savanponda11@gmail.com',
// 	  subject: `Message from: ${req.body.mailerState.email}`,
// 	  text: `${req.body.mailerState.message}`,
// 	};
  
// 	if (req.files && req.files.attachment) {
// 	  let attachment = req.files.attachment;
  
// 	  // Validate file format
// 	  const allowedFormats = ['png', 'jpg', 'jpeg'];
// 	  const format = attachment.name.split('.').pop();
// 	  if (!allowedFormats.includes(format)) {
// 		return res.status(400).json({
// 		  status: "fail",
// 		  message: "Invalid file format. Only PDF, JPG and JPEG are allowed.",
// 		});
// 	  }
  
// 	  // Add attachment to mailOptions
// 	  mailOptions.attachments = [
// 		{
// 		  filename: attachment.name,
// 		  content: attachment.data,
// 		  contentType: `image/${format}`,
// 		},
// 	  ];
// 	}
  
// 	transporter.sendMail(mailOptions, function (err, data) {
// 	  if (err) {
// 		res.json({
// 		  status: "fail",
// 		  message: err.message,
// 		});
// 	  } else {
// 		console.log("== Message Sent ==");
// 		res.json({
// 		  status: "success",
// 		});
// 	  }
// 	});
//   });


// // in this api i want to share user selected attechment on mail and also please add validation only pdf and jpg and jpeg formet avllow 

// const port = 3001;
// app.listen(port, () => {
// 	console.log(`Server is running on port: ${port}`);
// });