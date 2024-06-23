const mongoose = require("mongoose");

const Submission = new mongoose.Schema({
  fullname: String,
  email: String,
  otp: String,
  pdfPath: String,
});

module.exports = mongoose.model("SubmitForms", Submission);
