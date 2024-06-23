const Submission = require("../server/models/config");
const sendEmail = require("../server/emailService");
const { generateOTP } = require("../server/generateOtp");

const createSubmission = async (req, res) => {
  const { fullName, email } = req.body;
  const pdfPath = req.file.path;
  const otp = generateOTP();

  try {
    const newSubmission = new Submission({ fullName, email, otp, pdfPath });
    await newSubmission.save();

    await sendEmail(email, "your otp code", `your otp code is ${otp}`, [
      { filename: req.file.originalname, path: pdfPath },
    ]);
    res.status(200).json({ message: "submission created and email send" });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

module.exports = createSubmission;
