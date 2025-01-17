const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const  dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_KEY).then(() => {
    console.log("Connected to database!");
  }).catch(() => {
    console.log("Connection failed!");
  });

app.get("/", (req, res) => {
    res.send("Hello World!");
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
