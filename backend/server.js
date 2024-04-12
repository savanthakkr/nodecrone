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
	};

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

const port = 3001;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});