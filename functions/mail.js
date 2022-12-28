const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: process.USER_EMAIL, pass: process.USER_PASS },
});

const mailOptions = {
  from: "Art Development",
  to: "malitan.contact@gmail.com",
  subject: "Testing nodemailer",
  text: "Test successful",
};

transporter.sendMail(mailOptions, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Message sent successfully!");
  }
});
