const express = require("express");
const multer = require("multer");
const createSubmission = require("../submissionController");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/submit", upload.single("pdf"), createSubmission);

module.exports = router;
