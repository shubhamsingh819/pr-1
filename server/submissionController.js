const Submission = require("../server/models/config");
const sendEmail = require("./emailService");
const { generateOTP } = require("./generateOtp");

const createSubmission = async (req, res) => {
  const { fullName, email } = req.body;
  const pdfPath = req.file.path;
  const otp = generateOTP();

  try {
    const newSubmission = new Submission({ fullName, email, otp, pdfPath });
    await newSubmission.save();

    await sendEmail(email, "Your OTP Code", `Your OTP code is ${otp}`, [
      { filename: req.file.originalname, path: pdfPath },
    ]);
    res.status(200).json({ message: "Submission created and email sent" });
  } catch (error) {
    console.error("Error creating submission:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = createSubmission;
