const express = require("express");
const multer = require("multer");
const createSubmisson = require("../submissionController");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/submit", upload.single("pdf"), createSubmisson);

module.exports = router;
