const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  otp: String,
  pdfPath: String,
});

module.exports = mongoose.model("Submission", SubmissionSchema);
