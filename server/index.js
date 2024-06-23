const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/connect");

const submissionRoute = require("./routes/submissonRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", submissionRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server connected on ${PORT}`));
