const nodemailer = require("nodemailer");

const sendMail = async (to, subject, text, attachements) => {
  const trsnPorter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
    attachements,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
